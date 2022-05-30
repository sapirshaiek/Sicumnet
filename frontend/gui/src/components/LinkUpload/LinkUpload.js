import React, { Component } from "react";
import "./LinkUpload.css";
import Select from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../axios';
class LinkUpload extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedValue: {},
        selectOptions: [],
        selectSubOptions: [],
        selectedSubValue: {},
        subOptions: new Map(),
        linkValue: "",
        linkName: "",
      };      
    }
  
    async getOptions() {
      const res = await axiosInstance
      .get('facilities')
      .then((res) => {
          //console.log(res.data);
          return res;
      });
      const data = res.data;
  
      const options = data.map((d) => ({
        value: d.id,
        label: d.name
      }));

      const res2 = await axiosInstance
      .get('courses')
      .then((res) => {
          //console.log(res.data);
          return res;
      });
      const data2 = res2.data;

      const subOptionsMap = new Map();
      data2.forEach(element => {
        if (element.facility != null){
          element.facility.forEach(fac => {

            if (subOptionsMap.get(fac) == null){
              subOptionsMap.set(fac, []);
            }
  
            subOptionsMap.get(fac).push(element);  
          })
        }
          
      });
  
      this.setState({ selectOptions: options , subOptions: subOptionsMap });
    }
  
    handleChange(e) {
      const options2 = this.state.subOptions.get(e.value).map((d) => ({
        value: d.id,
        label: d.name
      }));
      //console.log("This is",options2);
      this.setState({ selectedValue: e, selectedSubValue: {}, selectSubOptions: options2 });
    }

    handleChangeSub(e){
        this.setState({ selectedSubValue: e});
    }

    handleLinkValueChange(e){
        this.setState({ linkValue: e.target.value});
    }

    
    handleLinkNameChange(e){
        this.setState({linkName: e.target.value});
    }

    handleSubmit(event) {        
        event.preventDefault();
        console.log(
            "Logged:",this.state.linkName    
        );
            axiosInstance
                .post('link', {
                    course: this.state.selectedSubValue.value,
                    name: this.state.linkName,
                    url: this.state.linkValue,
                })
                .then((res) => {
                    alert("הלינק נשלח בהצלחה")
                    window.location.reload();
                });
      }
  
    componentDidMount() {
      this.getOptions();
    }
  
    render() {
      const { selectedValue = {}, selectedSubValue = {} } = this.state;
      const upload = <FontAwesomeIcon size="2x"  icon={faCloudUploadAlt} />
      return (
        <div className="group-3">
          <div className="title_inner">העלאת לינק חדש</div>
            <div className='form'>
            <form  className="mainform" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="textlabels">
                    <input  className='textinput' type="text" onChange={(e) => this.handleLinkValueChange(e)} />כתובת הלינק
            </div>
            <div className="textlabels">
                    <input  className='textinput' type="text" onChange={(e) => this.handleLinkNameChange(e)} />
                    שם הלינק
            </div>
            <div>
                <label>
            <Select
                value={selectedValue}
                options={this.state.selectOptions}
                onChange={this.handleChange.bind(this)}
            />
            שם פקולטה
            </label>
            <div>
            <label>
            <Select 
                value={selectedSubValue}
                options={this.state.selectSubOptions}
                onChange={this.handleChangeSub.bind(this)}
            />
            שם הקורס
            </label>
            </div>
            <button className="cloud" type="submit">{upload}</button> 
            </div>
            </form>
            </div>
        </div>
        
      );
    }
  }
export default LinkUpload;
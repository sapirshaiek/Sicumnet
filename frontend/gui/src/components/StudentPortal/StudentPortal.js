import React, { Component } from "react";
import axiosInstance from '../axios';
import { Link } from "react-router-dom";
import "./StudentPortal.css"
import siLogo from '../../images/Information_system.png'
import csLogo from '../../images/Information_system.png'
import hsmLogo from '../../images/Information_system.png'
import baLogo from '../../images/Business_Administration.png'
import psyLogo from '../../images/psychology.png'
import lawLogo from '../../images/law.png'
import acctLogo from '../../images/Accounting.png'


class StudentPortal extends Component {

  constructor(){
    super();
    this.state = {facilities: [],
                  unreadMessages: null};
  }

  componentDidMount() {
    axiosInstance
    .get('facilities')
    .then((response) => {
      //console.log("response = ", response);
      this.setState({facilities: response.data});
    })
    .catch((response) => {
      //handle error
      this.setState({facilities: []});
    });

    if (localStorage.getItem('role') === 'admin'){
      axiosInstance
      .get('unreadMessages')
      .then((response_msgs) => {
        this.setState({unreadMessages: response_msgs.data.count});
      })
      .catch((response_msgs) =>{
        this.setState({unreadMessages: 0});
      })
    }

  }

  getUnreadMessages(){
    if (this.state.unreadMessages != null){
      return (<span>[{this.state.unreadMessages}] </span>)
    }
  }
  
  renderLinks(){
    let role = localStorage.getItem('role');
    if (role === 'admin'){
      return (
        <div className="bottom_links">
          <div className="bottom_link">
          <Link to={"/newLinks"} className="clear" > לינקים חדשים </Link>
          </div>
          <div className="bottom_link">
          <Link to={"/messages"} className="clear" > {this.getUnreadMessages()}הודעות </Link>
          </div>
          <div className="bottom_link">
          <Link to={"/contactadmin"} className="clear" >עדכון פרטים </Link>
          </div>
        </div>
      );
    }else{
      return (
        <div className="bottom_links">
          <div className="bottom_link">
          <Link to={"/uploadLink"} className="clear" >העלאת לינק </Link>
          </div>
          <div className="bottom_link">
          <Link to={"/contactadmin"} className="clear" >פניה למנהל </Link>
          </div>
        </div>
      );
    }
  }

  getFacilityLogo(logo){
    if (logo === 'si'){
      return siLogo;
    }if (logo === 'cs'){
      return csLogo;
    }if (logo === 'hsm'){
      return hsmLogo;
    }else if (logo === 'ba'){
      return baLogo;
    }else if (logo === 'law'){
      return lawLogo;
    }else if (logo === 'psy'){
      return psyLogo;
    }else if (logo === 'acct'){
      return acctLogo;
    }

    return siLogo;
  }

  render() {

    //const facilities = getTopics();
    
    return (
      <div>
      <div className="circle_menu">
        {this.state.facilities.map(({ name, id, logo}) => (
          <div key={id} className="round_button red">
            <Link to={"facility/" + id} className="clear" >{name} <div><img className="fac_logo" src={this.getFacilityLogo(logo)} alt="FacilityLogo" /></div></Link>
          </div>
            
        ))}
      
        </div>
      {this.renderLinks()}

    </div>
    );
  }
}
export default StudentPortal;
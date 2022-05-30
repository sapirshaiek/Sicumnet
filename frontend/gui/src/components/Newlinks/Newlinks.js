import React, { Component } from "react";
import axiosInstance from '../axios';
import { format } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import "./Newlinks.css"

class StudentPortalCourse extends Component {

    constructor(props){
        super(props)
        this.state = {
            links: null,
            facilityNameMap: {},
            courseFacilityMap: {},
        }
    }


    componentDidMount() {

        axiosInstance
        .get('links/pending')
        .then((res) => {
            this.setState({links: res.data});
        })
        .catch((response) => {
          //handle error
          this.setState({links: []});
        });

    }

    approveLink(e, id, approved){
        if (approved){
            axiosInstance
            .put('activateLink/' + id)
            .then((res) => {
                alert("הלינק התקבל בהצלחה")
                window.location.reload();
            })
            .catch((response) => {
                alert("הלינק לא התקבל בהצלחה")
                window.location.reload();
            });
        }else{
            axiosInstance
            .delete('link/' + id)
            .then((res) => {
                alert("הלינק נמחק בהצלחה")
                window.location.reload();
            })
            .catch((response) => {
              //handle error
              alert("הלינק לא נמחק בהצלחה")
                window.location.reload();
            });
        }

        
    }


    render() {
        const download = <FontAwesomeIcon size="2x" flip="horizontal" icon={faDownload} />
        const trash = <FontAwesomeIcon size="2x" flip="horizontal" icon={faTrashCan} />
        const check= <FontAwesomeIcon size="2x"  icon={faCircleCheck} />        

        if (this.state.links == null){
            return (
                <div>
                    <h1 className="text_label">לינקים חדשים</h1>
                 </div>
            );
        }else{
            return (
                <div>
                    <div className="title_inner">לינקים חדשים</div>
                    <div>
                        <table className="link_table" cellPadding="18px">
                            <tbody>
                        <tr className="headers">
                            <th></th>
                            <th>פקולטה</th>
                            <th>תאריך</th>
                            <th><div className="td_right_h">לינקים להורדה</div></th>
                        </tr>
                        {this.state.links.map(({ id, course, url, name, created, facility_names}) => (

                                <tr className="rows" key={id}>
                                    
                                    <td className="two_wide">
                                        <div className="vote_box">
                                        <div><button className="trash" onClick={(e) => this.approveLink(e,id, false)} >{trash}</button></div>
                                        </div>
                                        <div className="vote_box">
                                            <div><button className="check" onClick={(e) => this.approveLink(e,id, true)} >{check}</button></div>
                                        </div>
                                    </td>
                                    <td className="facility_names">
                                        {
                                        facility_names.map((fac_name, i) => {
                                            return (
                                                <p>{fac_name}</p>
                                            )
                                        })
                                        }
                                    </td>
                                    <td>{format(new Date(created),"dd.MM.yyyy")}</td>
                                    <td className="two_wide">
                                        <div className="link_box">
                                            <a  target="_blank" href={url}>{name} </a>
                                        </div>
                                        <div className="link_box link_box_right">
                                            {download}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div> 
                </div>
            );
        }
      }
    }
export default StudentPortalCourse;
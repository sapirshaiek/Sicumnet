import React, { Component } from "react";
import { format } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../axios';
import "./StudentPortalCourse.css"

class StudentPortalCourse extends Component {

    constructor(props){
        super(props)
        this.state = {
            facility_id: this.props.facilityIdentifier,
            course_id: this.props.courseIdentifier,
            courseName: null,
            links: null,
            votes: null}
    }


    componentDidMount() {

        axiosInstance
        .get('course/' + this.state.course_id)
        .then((crs_response) => {
            //console.log("response = ", response);
            this.setState({courseName: crs_response.data.name});

            axiosInstance
            .get('links/' + this.state.course_id)
            .then((response) => {
                //console.log("response = ", response);
                this.setState({links: response.data});
                
                axiosInstance
                .get('votes/' + this.state.course_id)
                .then((vts_response) => {
                    //console.log("response = ", response);
                    
                    this.setState({votes: vts_response.data});
  
                  });
              });
          });
    }

    vote(event, id, upVote){
        //console.log(id);
        //console.log(upVote);
		axiosInstance
			.post('vote', {
				link: id,
				voteUp: upVote,
			})
			.then((res) => {
				window.location.reload();
				//console.log(res.data);
			});
    }

    
    getVotes(link_id, upVote){
        if (this.state.votes != null && this.state.votes[link_id] != null){
            if (this.state.votes[link_id][upVote] == null){
                return "0";
            }else{
                return this.state.votes[link_id][upVote];
            }
                
        }else{
            return "0";
        }
        
    }

    getUrl(urlString){
        if (urlString.startsWith("http")){
            return urlString;
        }else{
            return "https://" + urlString;
        }
    }

    renderAdminHeader(){
        if (localStorage.getItem("role") === "admin"){
            return (<th></th>);    
        }
        
    }
    
    renderAdminDelete(id_to_delete){
        const trash = <FontAwesomeIcon size="2x" flip="horizontal" icon={faTrashCan} />       
        if (localStorage.getItem("role") === "admin"){
            return(
                <td><div><button className="trash" onClick={(e) => this.deleteLink(e,id_to_delete)} >{trash}</button></div></td>
            );
        }
    }

    deleteLink(e, id){
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

    render() {
        const download = <FontAwesomeIcon size="2x" flip="horizontal" icon={faDownload} />
        const thumbDown = <FontAwesomeIcon size="2x" flip="horizontal" icon={faThumbsDown} />
        const thumbUp= <FontAwesomeIcon size="2x" flip="horizontal" icon={faThumbsUp} /> 
        
        if (this.state.links == null){
            return (
                <div>
                    <div className="title_inner">{this.state.courseName}</div>
                 </div>
            );
        }else{
            return (
                <div>
                    <div className="title_inner">{this.state.courseName}</div>
                    <div>
                        <table className="link_table" cellPadding="18px">
                            <tbody>
                        <tr className="headers">
                            {this.renderAdminHeader()}
                            <th>דירוג</th>
                            <th>תאריך</th>
                            <th><div className="td_right_h">לינקים להורדה</div></th>
                        </tr>
                        {this.state.links.map(({ id, url, name, created}) => (

                                <tr className="rows" key={id}>
                                    {this.renderAdminDelete(id)}
                                    <td className="two_wide">
                                        <div className="vote_box">
                                            <div  className="thumbs_up" ><button name="voteUp" onClick={(e) => this.vote(e,id, true)}className="thumbs_up">{thumbUp}</button></div>
                                            <div  className="thumbs_up" >{this.getVotes (id, "true")}</div>
                                        </div>
                                        <div className="vote_box">
                                            <div className="thumbs_dwn" ><button name="voteUp" onClick={(e) => this.vote(e,id, false)} className="thumbs_dwn">{thumbDown}</button></div>
                                            <div className="thumbs_dwn" >{this.getVotes(id, "false")}</div>
                                        </div>
                                    </td>
                                    <td>{format(new Date(created),"dd.MM.yyyy")}</td>
                                    <td className="two_wide">
                                        <div className="link_box">
                                            <a target="_blank" href={this.getUrl(url)}>{name}</a>
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
import React, { Component } from "react";
import axiosInstance from '../axios';
import { Link } from "react-router-dom";
import "./StudentPortalFacility.css";


class StudentPortalFacility extends Component {

    constructor(props){
        super(props)
        this.state = {courses: [], facilityName: "", facility_id: this.props.facID}

    }
    componentDidMount() {

      axiosInstance
      .get('facilities/'+ this.state.facility_id)
      .then((fac_response) => {
          this.setState({facilityName: fac_response.data.name});

          axiosInstance
          .get('courses/' + this.state.facility_id)
          .then((response) => {
              this.setState({courses: response.data});

            });
        });

    }

    render() {
        return (
            <div>
            <div className="title_inner">ה{this.state.facilityName}</div>
            <div className="course_zone">
                    {this.state.courses.map(({ id, name }) => (
                        <div key={id} className="item button_course">
                            <Link key={id} to={"./" + id} className="button_course" >{name}</Link>
                        </div>
                    ))}
                
            </div>
         </div>
        );
      }
    }
export default StudentPortalFacility;
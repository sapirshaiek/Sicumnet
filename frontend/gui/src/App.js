import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css"
import videoLogo from './images/Video.png'
import studentLogo from './images/Student_login.png'
import managerLogo from './images/Manager_login.png'


class App extends Component {
   
  render() {


    return (
      <div>
      <div className="menu_screen">
        
        <Link to="/adminPortal" className="card_block red">
          <div className="card_image">
          <img className="card_logo" src={managerLogo} alt="Manager Logo" />
          </div>
         <span className="card_text">כניסת מנהל המערכת</span></Link>
        <Link to="/studentPortal" className="card_block red">
        <div className="card_image">
          <img className="card_logo" src={studentLogo} alt="Student Logo" />
          </div>
          <span className="card_text">כניסת סטודנטים</span>
          </Link>
          
      </div>
                
          
          <div className="bottom_video_links">
          <Link to={"/video"} className="bottom_video_link" >
          <div>
            <span className="video_text">סרטון הדרכה</span> <span className="video_icon"><img className="vid_logo" src={videoLogo} alt="VideoLogo" /></span>
          </div>
          </Link>
          </div>
        
      </div>
    );
  }
}
export default App;
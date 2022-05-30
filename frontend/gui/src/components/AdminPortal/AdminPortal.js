import React, { Component } from "react";
import axiosInstance from '../axios';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AdminPortal.css"

class AdminPortal extends Component {

  
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
      authed: false
      }
}

  handleSubmit(event) {
    event.preventDefault();
    //console.log("Hello");
   
		axiosInstance
			.post('token/', {
				email: this.state.username,
				password: this.state.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
        this.setState({authed: true})
        localStorage.setItem('role', "admin");
				//console.log(res);
				console.log(res.data);
			});
  }

  handleChangeUsername(event) {  
    this.setState({username: event.target.value})
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value})
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }


  render() {
    return (
      <div className="group-3">
        <div className="title_inner">כניסת מנהל מערכת</div>
        <div className='form'>
            {localStorage.getItem('role') === 'admin' && <Navigate replace to="/studentPortal" />}
          <form className="mainform" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="textlabels">
              <input className='textinput'  type="text" autoComplete="username" onChange={(e) => this.handleChangeUsername(e)}/>:שם משתמש
            </div>
            <div  className="textlabels"> 
              <input className='textinput'  type="password" autoComplete="current-password" onChange={(e) => this.handleChangePassword(e)}/>:סיסמא
            </div>
            <div className="text_label-3 rubik-normal-thunder-40px">
              <Link to={"/Forgetpassword"} className="pass">  שכחתי סיסמא </Link>
            </div>
            <div> 
              <button className="cloud" type="submit" disabled={!this.validateForm()}>אישור</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}
export default AdminPortal;

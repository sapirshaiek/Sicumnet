import React from "react";
import { Link, useNavigate} from "react-router-dom";
import "./Navbar.css";
import back from '../../images/Back.png'
import logo from '../../images/Wlogo.png'
import home from '../../images/Home.png'

function renderLogout(){
    if (localStorage.getItem("role") === "admin"){
        return (<div className="logout"><Link to="/logout" >יציאה</Link></div>);
    }

}


function Navbar(){
    const navigate = useNavigate();

    if (window.location.pathname === '/') {
        return (
            <div className="navbar_container">
                <div className="navbar red">
                    <div className="title">
                        ברוכים הבאים לאתר סיכומנט
                    </div>
                    <div>
                    <Link to="/" > <img className="round_button_white" src={logo} alt="Logo" /></Link>
                    
                    </div>
                </div>
                {renderLogout()}
            </div>
        );
    }else{
        return (
            <div>
            <div className="navbar red">
                <div className="nav_buttons">
                
                <button className="back_button red" onClick={() => navigate(-1)}><img className="nav_button" src={back} alt="Back" /></button>
                <button className="back_button red" onClick={() => navigate("/")}><img className="nav_button" src={home} alt="Home" /></button>
                </div>
                <form >
                    <div>
                    <input className="search_bar" type="text" name="search" />
                    </div>
                </form>
                <Link to="/" > <img className="round_button_white" src={logo} alt="Logo" /></Link>
                
            </div>
            {renderLogout()}
            </div>
        );
    }

    

}

export default Navbar;
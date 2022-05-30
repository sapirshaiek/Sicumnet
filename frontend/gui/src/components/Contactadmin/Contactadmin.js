import React, { Component } from "react";
import "./Contactadmin.css"




class Contactadmin extends Component {
 

  render() {
    return (
        <div className="group-3">
            <h1 className="titleadmincon">פניה למנהל מערכת</h1>
        <form className="formsdmin">
            <div>
            <label>
                    <input class='textinput' type="text" />
                    :שם השולח
                </label>
            </div>   
            <div>
                <label>
                    <input class='textinput' type="text" />
                    :מייל
                </label>
            </div>
            <div> 
            <label >:תוכן ההודעה</label>
                <textarea class='textinput'  rows="5" cols="33">
                </textarea>

            </div>
        </form>
        <div> 
          <button className="cloud" type="submit">שליחה</button>
          </div>
    </div>
    );
  }
}

export default Contactadmin;






import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import StudentPortal from "./components/StudentPortal/StudentPortal"
import AdminPortal from "./components/AdminPortal/AdminPortal"
import Contactadmin from "./components/Contactadmin/Contactadmin";
import StudentFacilityLoader from "./components/StudentPortalFacility/StudentFacilityLoader";
import StudentFacilityCourseLoader from "./components/StudentPortalCourse/StudentFacilityCourseLoader";
import Video from "./components/Video/Video";
import LinkUpload from "./components/LinkUpload/LinkUpload";
import Newlinks from "./components/Newlinks/Newlinks";
import Messages from "./components/Messages/Messages";
import Logout from "./components/logout"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar/>
   <Routes>
      <Route exact path="/" element={<App/>} />
      <Route exact path="/logout" element={<Logout/>} />
      <Route exact path="/uploadLink" element={<LinkUpload/>} />
      <Route exact path="/adminPortal" element={<AdminPortal/>} />
      <Route exact path="/contactadmin" element={<Contactadmin/>} /> 
      <Route exact path="/studentPortal" element={<StudentPortal/>} />
      <Route exact path="/newLinks" element={<Newlinks/>} />
      <Route exact path="/messages" element={<Messages/>} />
      <Route exact path="/video" element={<Video />} />
      <Route path="studentPortal/facility/:facilityID" element={<StudentFacilityLoader />}/>
      <Route path="studentPortal/facility/:facilityID/:courseID" element={<StudentFacilityCourseLoader />}/>

      
      
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

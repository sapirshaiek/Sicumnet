import React from "react";
import { useParams } from "react-router-dom";
import StudentPortalCourse from "./StudentPortalCourse";

function StudentFacilityCourseLoader(){
    const {facilityID , courseID } = useParams();

    return (
        <div>
            <StudentPortalCourse facilityIdentifier={facilityID}  courseIdentifier={courseID} />
        </div>
    );

}

export default StudentFacilityCourseLoader;
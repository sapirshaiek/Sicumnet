import React from "react";
import { useParams } from "react-router-dom";
import StudentPortalFacility from "./StudentPortalFacility";

function StudentFacilityLoader(){
    const { facilityID } = useParams();

    return (
        <div>
            <StudentPortalFacility facID={facilityID} />
        </div>
    );

}

export default StudentFacilityLoader;
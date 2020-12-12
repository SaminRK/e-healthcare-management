import React from 'react';
import user from "../assets/user.png";
import "../General.css";

export default function FoundDoctors() {
    return(
        <React.Fragment>
            <h2>Search Results</h2>
            <div className="area border ash">
            <DoctorMiniInfo></DoctorMiniInfo>
            <DoctorMiniInfo></DoctorMiniInfo>
            <DoctorMiniInfo></DoctorMiniInfo>
        </div>
        </React.Fragment>
    );
}

function DoctorMiniInfo() {
    return(
        <div className="area border margin">
            <img className="userImage" src={user}></img>
            <h4> Dr. Bob </h4>
            <a href="dead">view</a>   | 
            <a href="dead">  make appointment</a>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellendus, nisi assumenda vitae, nulla neque aperiam labore deserunt eum voluptate consequatur minima quae voluptas ipsum, alias corporis nihil temporibus? Accusantium.
        </div>
    );
}
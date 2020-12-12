import React from 'react';
import FoundDoctors from './FoundDoctors';
import ProvideInformationForFindingDoctors from './ProvideInformationForFindingDoctors';
import "../General.css";

export default function FindDoctors() {
    return(
        <div className="area">
            <h2>Find Doctors</h2>
            <ProvideInformationForFindingDoctors></ProvideInformationForFindingDoctors>
            <FoundDoctors></FoundDoctors>
        </div>
        
    );
}
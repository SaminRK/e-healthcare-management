import React from "react";
import {
	NavLink,
	Route,
	Switch,
	useParams,
	useRouteMatch,
} from "react-router-dom";
import PrescriptionView from "../PrescriptionView/PrescriptionView";
import MedicalRecordsProvider from "../model/MedicalRecordsProvider";
import pdf from "../assets/pdf.png";
import print from "../assets/print.png";
import share from "../assets/share.png";

const MedicalRecord = () => {
	const { name } = useParams();
	const medicalRecord = MedicalRecordsProvider.getMedicalRecord(name);

	return (
		<div className="medicalRecordArea">
			<div className="topBar">
			<span className="medicalRecordIdContainer">Id: <i>{name}</i></span>
			<button className="topBarButton" ><img className="topBarButtonImage" src={pdf} alt="pdf"/></button>
			<button className="topBarButton" ><img className="topBarButtonImage" src={print} alt="print"/></button>
			<button className="topBarButton" ><img className="topBarButtonImage" src={share} alt="share"/></button>
			</div>
			<PrescriptionView {...medicalRecord}></PrescriptionView>
		</div>
	);
};

const MedicalRecords = () => {
	const { url, path } = useRouteMatch();
	const medicalRecordKeys = MedicalRecordsProvider.getMedicalRecordKeys();
    const medicalRecords = MedicalRecordsProvider.getMedicalRecords();

	return (
		<div>
			<ul className="sidenav">
				{medicalRecordKeys.map((key, id) => {
					return (
						<li key={key}>
							<NavLink activeStyle={{backgroundColor: "rgb(100, 100, 100)", color: "white"}} to={`${url}/${key}`}>
								{`Prescription by ${
									medicalRecords.get(key).prescribedBy
								} on ${medicalRecords.get(key).date}`}
							</NavLink>
						</li>
					);
				})}
			</ul>
            <div className="content">
            <Switch>
				<Route path={`${path}/:name`}>
					<MedicalRecord />
				</Route>
			</Switch>
            </div>
			
		</div>
	);
};

export default MedicalRecords;

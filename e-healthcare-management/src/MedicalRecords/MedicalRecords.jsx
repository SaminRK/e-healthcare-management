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

const MedicalRecord = () => {
	const { name } = useParams();
	const medicalRecord = MedicalRecordsProvider.getMedicalRecord(name);

	return (
		<div>
			<h3>{name}</h3>
			<PrescriptionView {...medicalRecord}></PrescriptionView>
		</div>
	);
};

const MedicalRecords = () => {
	const { url, path } = useRouteMatch();
	const medicalRecordKeys = MedicalRecordsProvider.getMedicalRecordKeys();
    const medicalRecords = MedicalRecordsProvider.getMedicalRecords();

    console.log({medicalRecords});

	return (
		<div>
			<ul className="sidenav">
				{medicalRecordKeys.map((key, id) => {
					return (
						<li key={key}>
							<NavLink activeStyle={{backgroundColor: "green"}} to={`${url}/${key}`}>
								{`Prescription by ${
									medicalRecords.get(key).prescribedBy
								} on ${medicalRecords.get(key).date} ${key}`}
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

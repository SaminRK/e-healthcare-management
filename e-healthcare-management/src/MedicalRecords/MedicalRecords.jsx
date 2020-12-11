import React from "react";
import {
	Link,
	Route,
	Switch,
	useParams,
	useRouteMatch,
} from "react-router-dom";
import PrescriptionView from "../PrescriptionView/PrescriptionView";
import MedicalRecordsProvider from "../model/MedicalRecordsProvider";

const MedicalRecord = () => {
	const { name } = useParams();
	const medicalRecordsProvider = new MedicalRecordsProvider();
	const medicalRecord = medicalRecordsProvider.getMedicalRecord(name);

	return (
		<div>
			<h3>{name}</h3>
			<PrescriptionView {...medicalRecord}></PrescriptionView>
		</div>
	);
};

const MedicalRecords = () => {
	const { url, path } = useRouteMatch();
	const medicalRecordsProvider = new MedicalRecordsProvider();
	const medicalRecords = medicalRecordsProvider.getMedicalRecords();
	const medicalRecordKeys = [...medicalRecords.keys()];

	return (
		<div>
			<ul>
				{medicalRecordKeys.map((key, id) => {
					return (
						<li key={key}>
							<Link to={`${url}/${key}`}>
								{`Prescription by ${
									medicalRecords.get(key).prescribedBy
								} on ${medicalRecords.get(key).date} ${key}`}
							</Link>
						</li>
					);
				})}
			</ul>
			<Switch>
				<Route path={`${path}/:name`}>
					<MedicalRecord />
				</Route>
			</Switch>
		</div>
	);
};

export default MedicalRecords;

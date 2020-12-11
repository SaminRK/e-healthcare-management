import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FindDoctors from '../FindDoctors/FindDoctors';
import MedicalRecords from '../MedicalRecords/MedicalRecords';
import Home from '../Home/Home';

export default function MainWindow() {
	return (
		<div>
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li>
						<Link to="/e-healthcare-management">Home</Link>
					</li>
					<li>
						<Link to="/e-healthcare-management/find-doctors">Find Doctors</Link>
					</li>
					<li>
						<Link to="/e-healthcare-management/medical-records">Medical Records</Link>
					</li>
				</ul>
			</nav>

			{/* Route components are rendered if the path prop matches the current URL */}
			<Route exact path="/e-healthcare-management">
				<Home />
			</Route>
			<Route exact path="/e-healthcare-management/find-doctors">
				<FindDoctors />
			</Route>
			<Route exact path="/e-healthcare-management/medical-records">
				<MedicalRecords />
			</Route>
		</div>
	);
}

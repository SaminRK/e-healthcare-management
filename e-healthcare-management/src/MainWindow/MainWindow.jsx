import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FindDoctors from "../FindDoctors/FindDoctors";
import MedicalRecords from "../MedicalRecords/MedicalRecords";
import Home from "../Home/Home";

export default function MainWindow() {
    return (
		<div>
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/find-doctors">
							Find Doctors
						</Link>
					</li>
					<li>
						<Link to="/medical-records">
							Medical Records
						</Link>
					</li>
				</ul>
			</nav>

			{/* Route components are rendered if the path prop matches the current URL */}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/find-doctors">
					<FindDoctors />
				</Route>
				<Route path="/medical-records">
					<MedicalRecords />
				</Route>
                <Route>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

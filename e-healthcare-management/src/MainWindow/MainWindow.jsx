import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import FindDoctors from "../FindDoctors/FindDoctors";
import MedicalRecords from "../MedicalRecords/MedicalRecords";
import Home from "../Home/Home";
import MedicalRecordsProvider from "../model/MedicalRecordsProvider";
import "./MainWindow.css";

class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        MedicalRecordsProvider.populate();
    }

    render() {
        return(
            <div>
			<nav>
				<ul className="sidenav">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/find-doctors">
							Find Doctors
						</NavLink>
					</li>
					<li>
						<NavLink to="/medical-records">
							Medical Records
						</NavLink>
					</li>
				</ul>
			</nav>
            <div className="content">
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

			
		</div>

        );
    }
}

export default MainWindow;
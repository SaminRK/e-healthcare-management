import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import FindDoctors from "../FindDoctors/FindDoctors";
import MedicalRecords from "../MedicalRecords/MedicalRecords";
import Home from "../Home/Home";
import MedicalRecordsProvider from "../model/MedicalRecordsProvider";
import "./MainWindow.css";
import "../General.css";
import user from "../assets/user.png";

class MainWindow extends React.Component {
	constructor(props) {
		super(props);
		MedicalRecordsProvider.populate();
	}

	render() {
		return (
			<React.Fragment>
				<div className="border">
					<div className="right border round padding">
					<img className="userImage" src={user}></img>
					<br></br>Fazle Rafsani
					<br></br><a href="dead">logout</a>
					</div>
					
				</div>
				<div>
				<nav>
					<ul className="sidenav">
						<li>
							<NavLink
								activeStyle={{
									backgroundColor: "rgb(100, 100, 100)",
									color: "white",
								}}
								to="/"
								exact={true}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								activeStyle={{
									backgroundColor: "rgb(100, 100, 100)",
									color: "white",
								}}
								to="/find-doctors"
							>
								Find Doctors
							</NavLink>
						</li>
						<li>
							<NavLink
								activeStyle={{
									backgroundColor: "rgb(100, 100, 100)",
									color: "white",
								}}
								to="/medical-records"
							>
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
			</React.Fragment>
			
		);
	}
}

export default MainWindow;

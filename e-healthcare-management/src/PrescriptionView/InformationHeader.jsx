import React, { Component } from "react";
import "./InformationHeader.css";


class InformationHeader extends Component {
	render() {
		return (
			<div className="headerContainer">
				<span className="fieldContainer">
				Name: &nbsp; &nbsp;
				{this.props.name}
				</span>
				<br />
				<span className="fieldContainer">
				Age: &nbsp; &nbsp;
				{this.props.age}
				</span>
				<span className="fieldContainer">
				Sex: &nbsp; &nbsp;
				{this.props.sex}
				</span>
				<br />
				<span className="fieldContainer">
				Address: &nbsp; &nbsp;
				{this.props.address}
				</span>
			</div>
		);
	}
}

export default InformationHeader;

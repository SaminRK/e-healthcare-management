import React, { Component } from "react";
import "./Box.css";
import MyEditor from "./MyEditor";

class Box extends Component {

	render() {
		return (
			<div className="box">
				<div
					className="boxHeading"
				>
				{this.props.box.heading}
				</div>
				<MyEditor />
			</div>
		);
	}
}

export default Box;

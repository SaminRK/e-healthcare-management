import React, { Component } from "react";
import Box from "./Box";
import "./Column.css";

class Column extends Component {
	
	render() {
		return (
			<div>
				{this.props.boxes.map((box, index) => (
					<Box
						key={box.id}
						box={box}
					/>
				))}
			</div>
		);
	}
}

export default Column;

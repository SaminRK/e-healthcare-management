import React from "react";
import Column from "./Column";
import InformationHeader from "./InformationHeader";
import "./PrescriptionView.css";

class PrescriptionView extends React.Component {
	
	render() {
        const props = this.props;
        var serialOfBoxes = 0;
        var boxes = [[], []];

        props.boxes.forEach((box, index) => {
            var boxx = box;
            boxx.id = serialOfBoxes++;
            if (box.heading === "Rx") {
                boxes[1].push(boxx);
            } else {
                boxes[0].push(boxx);
            }
        });

		
		return (
			<div className="page">
				<InformationHeader
					name={props.patientName}
					age={props.patientAge}
					sex={props.patientSex}
					address={props.patientAddress}
				/>
				<div className="columnContainer">
					<div className="column">
						<Column boxes={boxes[0]} />
					</div>
					<div className="column">
						<Column boxes={boxes[1]} />
					</div>
				</div>
			</div>
		);
	}
}

export default PrescriptionView;

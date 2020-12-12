import React from "react";
import "../General.css";
import "./ProvideInformationForFindingDoctors.css";

class ProvideInformationForFindingDoctors extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1,
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	_next = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep >= 2 ? 3 : currentStep + 1;
		this.setState({
			currentStep: currentStep,
		});
	};

	_prev = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		this.setState({
			currentStep: currentStep,
		});
	};

	/*
	 * the functions for our button
	 */
	previousButton() {
		let currentStep = this.state.currentStep;
		if (currentStep !== 1) {
			return (
				<button
					className="btn btn-secondary"
					type="button"
					onClick={this._prev}
				>
					Previous
				</button>
			);
		}
		return null;
	}

	nextButton() {
		let currentStep = this.state.currentStep;
		if (currentStep < 3) {
			return (
				<button
					className="btn btn-primary float-right"
					type="button"
					onClick={this._next}
				>
					Next
				</button>
			);
		}
		return null;
	}

	render() {
		return (
			<div className="area border ash">
				<h3>Provide Information for finding doctor</h3>
				<p>Step {this.state.currentStep} </p>

				<form onSubmit={this.handleSubmit}>
					{/* 
          render the form steps and pass required props in
        */}
					<Step1
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
					/>
					<Step2
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
					/>
					<Step3
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
					/>
					{this.previousButton()}
					{this.nextButton()}
				</form>
			</div>
		);
	}
}

function Step1(props) {
	if (props.currentStep !== 1) {
		return null;
	}
	return (
		<div className="form-group">
			<label htmlFor="information">Information:</label>
			<select name="information" id="information">
				<option value="A">Information A</option>
				<option value="B">Information B</option>
				<option value="C">Information C</option>
				<option value="D">Information D</option>
			</select>
            <br></br>
            <label htmlFor="information">Information:</label>
			<select name="information" id="information">
				<option value="A">Information A</option>
				<option value="B">Information B</option>
				<option value="C">Information C</option>
				<option value="D">Information D</option>
			</select>
            <br></br>
            <label htmlFor="information">Information:</label>
			<select name="information" id="information">
				<option value="A">Information A</option>
				<option value="B">Information B</option>
				<option value="C">Information C</option>
				<option value="D">Information D</option>
			</select>
            <br></br>
		</div>
	);
}

function Step2(props) {
	if (props.currentStep !== 2) {
		return null;
	}
	return (
		<div className="form-group">
			<label htmlFor="information">More Information:</label>
			<select name="information" id="information">
				<option value="A">Information A</option>
				<option value="B">Information B</option>
				<option value="C">Information C</option>
				<option value="D">Information D</option>
			</select>
            <br></br>
            <label htmlFor="information">More Information:</label>
			<select name="information" id="information">
				<option value="A">Information A</option>
				<option value="B">Information B</option>
				<option value="C">Information C</option>
				<option value="D">Information D</option>
			</select>
            <br></br>
            <label htmlFor="information">More Information:</label>
			<select name="information" id="information">
				<option value="A">Information A</option>
				<option value="B">Information B</option>
				<option value="C">Information C</option>
				<option value="D">Information D</option>
			</select>
            <br></br>
		</div>
	);
}

function Step3(props) {
	if (props.currentStep !== 3) {
		return null;
	}
	return (
		<React.Fragment>
			<label htmlFor="information">Furthermore Information:</label>
			<select name="information" id="information">
				<option value="A">Information A</option>
				<option value="B">Information B</option>
				<option value="C">Information C</option>
				<option value="D">Information D</option>
			</select>
            <br></br>
            <label htmlFor="information">Furthermore Information:</label>
			<select name="information" id="information">
				<option value="A">Information A</option>
				<option value="B">Information B</option>
				<option value="C">Information C</option>
				<option value="D">Information D</option>
			</select>
            <br></br>
            <label htmlFor="information">Furthermore Information:</label>
			<select name="information" id="information">
				<option value="A">Information A</option>
				<option value="B">Information B</option>
				<option value="C">Information C</option>
				<option value="D">Information D</option>
			</select>
            <br></br>
			<button className="btn btn-success btn-block">Find</button>
		</React.Fragment>
	);
}

export default ProvideInformationForFindingDoctors;

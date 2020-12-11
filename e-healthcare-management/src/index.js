import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import MainWindow from "./MainWindow/MainWindow";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<BrowserRouter>
		<MainWindow></MainWindow>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

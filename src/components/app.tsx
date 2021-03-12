import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import "../styles/app.scss";

function App() {
	return (<>
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route exact path="/" component={Home}/>
			</Switch>
		</BrowserRouter>
	</>)
}

ReactDOM.render(<App/>, document.getElementById("app"));

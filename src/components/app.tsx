import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import "../styles/app.scss";
import { Map } from "./map";

function App() {
	return (<>
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/map" component={Map}/>
			</Switch>
		</BrowserRouter>
	</>)
}

ReactDOM.render(<App/>, document.getElementById("app"));

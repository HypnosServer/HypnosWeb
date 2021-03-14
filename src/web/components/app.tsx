import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import "../styles/app.scss";
import { Map } from "./map";
import { About } from "./about";
import { Status } from "./status";

function App() {
	return (<>
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route exact path="/"       component={Home}  />
				<Route exact path="/map"    component={Map}   />
				<Route exact path="/about"  component={About} />
        <Route exact path="/status" component={Status}/>
			</Switch>
		</BrowserRouter>
	</>)
}

ReactDOM.render(<App/>, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";
import coming from "./components/coming";
import Footer from "./components/Footer";
import CsEvents from "./components/events/CsEvents";
import MechEvents from "./components/events/MechEvents";
import ElecEvents from "./components/events/ElecEvents";
import CivilEvents from "./components/events/CivilEvents";
import LitEvents from "./components/events/LitEvents";
import FunEvents from "./components/events/FunEvents";
import Gaming from "./components/events/Gaming";

const app = (
	<Router basename={process.env.PUBLIC_URL}>
		<Switch>
			<Route exact path="/comingsoon" component={coming} />
			<Route path="/events/code" component={CsEvents} />
			<Route path="/events/mech" component={MechEvents} />
			<Route path="/events/elec" component={ElecEvents} />
			<Route path="/events/civil" component={CivilEvents} />
			<Route path="/events/lit" component={LitEvents} />
			<Route path="/events/fun" component={FunEvents} />
			<Route path="/events/gaming" component={Gaming} />
			<Route path="/" component={App} />
			<Route path="/about" component={Footer} />
		</Switch>
	</Router>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();

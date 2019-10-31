import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";
import coming from "./components/coming";
import Footer from "./components/Footer";
import Events from "./components/events/Events";
import CsEvents from "./components/events/CsEvents";
import { MechList } from "./components/events/MechList";

const app = (
	<Router basename={process.env.PUBLIC_URL}>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/comingsoon" component={coming} />
			<Route path="/events" component={Events} />
			<Route path="/code" component={CsEvents} />
			<Route path="/events/mech" component={MechList} />
			<Route path="/about" component={Footer} />
		</Switch>
	</Router>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();

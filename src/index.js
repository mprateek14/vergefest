import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";
import coming from "./components/coming";
import Footer from "./components/Footer";
import Events from "./components/events/Events";
import CsEvents from "./components/events/CsEvents";

const app = (
	<Router basename={process.env.PUBLIC_URL}>
		<Switch>
			<Route exact path="/comingsoon" component={coming} />
			<Route exact path="/events" component={Events} />
			<Route path="/code" component={CsEvents} />
			<Route path="/" component={App} />
			<Route path="/about" component={Footer} />
		</Switch>
	</Router>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();

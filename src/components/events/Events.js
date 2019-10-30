import React from "react";
import EventMenu from "./EventMenu";
import CsEvents from "./CsEvents";
import BoBar from "../bar";
import Footer from "../Footer";
import "./Events.css";

function Events() {
	return (
		<div>
			<BoBar />
			<br />
			<div>
				<h1 className="text-center">Events</h1>
			</div>{" "}
			<br />
			<div className="limenu">
				<EventMenu />
			</div>
			<div className="lievents">
				<CsEvents />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Events;

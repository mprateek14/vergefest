import React from "react";
import "./EventMenu.css";
export default function EventMenu() {
	return (
		<div>
			<div className="ui six item menu">
				<a href="/events/code" className="item l1">
					Coding
				</a>
				<a className="item l2">Electrical</a>
				<a className="item l3">Civil</a>
				<a href="/events/mech" className="item l4">
					Mechanical
				</a>
				<a className="item l5">Fun</a>
				<a className="item l6">Literary</a>
			</div>
		</div>
	);
}

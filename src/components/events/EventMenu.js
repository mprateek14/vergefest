import React from "react";
import "./EventMenu.css";
import { Link } from "react-router-dom";

export default function EventMenu() {
	return (
		<div>
			<div className="ui six item menu">
				<Link className="item l1" to="/events/code">
					Coding
				</Link>
				<Link className="item l2" to="">
					Electrical
				</Link>
				<Link className="item l1" to="">
					Civil
				</Link>
				<Link className="item l3" to="/events/mech">
					Mechanical
				</Link>
				<Link className="item l4" to="">
					Fun
				</Link>
				<Link className="item l5" to="">
					Literary
				</Link>
			</div>
		</div>
	);
}

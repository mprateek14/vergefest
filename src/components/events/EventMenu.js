import React from "react";
import "./EventMenu.css";
export default function EventMenu() {
	return (
		<div>
			<div class="ui six item menu">
				<a href="/events/code" class="item l1">
					Coding
				</a>
				<a class="item l2">Electrical</a>
				<a class="item l3">Civil</a>
				<a class="item l4">Mechanical</a>
				<a class="item l5">Fun</a>
				<a class="item l6">Literary</a>
			</div>
		</div>
	);
}

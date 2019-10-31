import React from "react";
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";
import { CSEvent } from "./CSList";

export default function CsEvents() {
	return (
		<div>
			<br />
			<CardLeft
				header={CSEvent[0].header}
				description={CSEvent[0].description}
				imageUrl={CSEvent[0].imageUrl}
			/>
			<br />
			<CardRight
				header={CSEvent[1].header}
				description={CSEvent[1].description}
				imageUrl={CSEvent[1].imageUrl}
			/>
			<br />
			<CardLeft
				header={CSEvent[2].header}
				description={CSEvent[2].description}
				imageUrl={CSEvent[2].imageUrl}
			/>
		</div>
	);
}

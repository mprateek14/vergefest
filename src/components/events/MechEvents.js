import React from "react";
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";
import { MechList } from "./MechList";

export default function CsEvents() {
	return (
		<div>
			<br />
			<CardLeft
				header={MechList[0].header}
				description={MechList[0].description}
				imageUrl={MechList[0].imageUrl}
			/>
			<br />
			<CardRight
				header={MechList[1].header}
				description={MechList[1].description}
				imageUrl={MechList[1].imageUrl}
			/>
			<br />
			<CardLeft
				header={MechList[2].header}
				description={MechList[2].description}
				imageUrl={MechList[2].imageUrl}
			/>
		</div>
	);
}

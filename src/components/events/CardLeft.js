import React from "react";
import "./CardStyle.css";

export default function CardLeft() {
	return (
		<div
			style={{
				marginLeft: "5%",
				marginRight: "5%",
				marginTop: "15px",
				marginBottom: "15px"
			}}
		>
			<div class="ui items">
				<div class="item">
					<img
						src="https://i.imgur.com/zk9qvxY.jpg"
						alt="image"
						class="ui large rounded image"
					/>

					<div class="content">
						<a class="ui large header">Cute Dog</a>

						<div class="description">
							<br />
							<p>
								Cute dogs come in a variety of shapes and sizes. Some cute dogs
								are cute for their adorable faces, others for their tiny
								stature, and even others for their massive size.
							</p>
							<p>
								Many people also have their own barometers for what makes a cute
								dog.
							</p>
							<div className="extra">
								Check Out the Problem Statement <a className="here">Here</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

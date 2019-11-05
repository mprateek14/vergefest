import React from "react";
import "./CardStyle.css";

const CardLeft = props => {
	return (
		<div
			style={{
				marginLeft: "10%",
				marginRight: "10%",
				marginTop: "20px",
				marginBottom: "20px",
				paddingTop: "15px"
			}}
		>
			<div className="ui items">
				<div className="item">
					<img
						src={props.imageUrl}
						alt="image"
						className="ui large rounded image"
					/>

					<div className="content">
						<a className="ui large header">{props.header}</a>

						<div className="description">
							<br />
							<p className="text-justify">{props.description}</p>
							{/* <div className="extra">
								Check Out the Problem Statement{" "}
								<a href={props.href} className="here">
									Here
								</a>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardLeft;

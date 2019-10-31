import React from "react";
import "./CardStyle.css";

const CardRight = props => {
	return (
		<div>
			<div
				style={{
					marginLeft: "10%",
					marginRight: "10%",
					marginTop: "15px",
					marginBottom: "15px"
				}}
			>
				<div className="ui items">
					<div className="item">
						<div className="content">
							<a className="ui large header">{props.header}</a>

							<div className="description">
								<br />
								<p className="text-justify">{props.description}</p>
								<div className="extra">
									Check Out the Problem Statement <a className="here">Here</a>
								</div>
							</div>
						</div>
						<img
							src={props.imageUrl}
							alt="image"
							className="ui large rounded image"
							style={{ marginLeft: "5px" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CardRight;

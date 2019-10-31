import React from "react";
import "react-bootstrap";
import { Link } from "react-router-dom";
import "./cardstyle.css";

const Card = props => {
	return (
		<div className="card text-center">
			<div className="overflow">
				<img
					src={props.imageUrl}
					alt="image"
					className="card-img-top"
					height="175px"
				/>
			</div>
			<div className="card-body header" text-dark>
				<h6>{props.name}</h6>
			</div>

			<div className="card-body text-dark cbody">
				<p className="card-text text-dark">
					<b>{props.description}</b>
				</p>

				<Link to={props.btnUrl} className="btn btn-outline-primary">
					View Events
				</Link>
			</div>
		</div>
	);
};

export default Card;

import React from "react";
import Particles from "react-particles-js";
import EventMenu from "./EventMenu";
import BoBar from "../bar";
import CardLeft from "./CardLeft";
import { FunList } from "./FunList";
import Footer from "../Footer";
import "./Events.css";
import ScrollTop from "../../ScrollTop";

const particleConfig = {
	particles: {
		number: {
			value: 120,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: "#ffffff"
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000"
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0,
				sync: false
			}
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 5,
				size_min: 0.3,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 1,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 600
			}
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "bubble"
			},
			onclick: {
				enable: true,
				mode: "repulse"
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 250,
				size: 0,
				duration: 2,
				opacity: 0,
				speed: 3
			},
			repulse: {
				distance: 400,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
};

export default function FunEvents() {
	return (
		<div>
			<ScrollTop />
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
				<div className="particles col-xs-12 img-fluid">
					<Particles params={particleConfig} />
				</div>

				<CardLeft
					header={FunList[0].header}
					description={FunList[0].description}
					imageUrl={FunList[0].imageUrl}
					href={FunList[0].href}
				/>
				<br />
				<CardLeft
					header={FunList[1].header}
					description={FunList[1].description}
					imageUrl={FunList[1].imageUrl}
				/>
				<br />
				<CardLeft
					header={FunList[2].header}
					description={FunList[2].description}
					imageUrl={FunList[2].imageUrl}
				/>
				<CardLeft
					header={FunList[3].header}
					description={FunList[3].description}
					imageUrl={FunList[3].imageUrl}
				/>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

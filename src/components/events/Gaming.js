import React, { Component } from "react";
import Particles from "react-particles-js";
import BoBar from "../bar";
import Footer from "../Footer";
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

export default class Gaming extends Component {
	render() {
		return (
			<div>
				<ScrollTop />
				<div>
					<BoBar />
				</div>
				<div className="game">
					<div className="particles col-xs-12 img-fluid">
						<Particles params={particleConfig} />

						<img
							class="ui large rounded image"
							src="https://i.imgur.com/j57BM0u.jpg"
						/>
						<img
							class="ui large rounded image"
							src="https://i.imgur.com/j57BM0u.jpg"
						/>
					</div>
				</div>
			</div>
		);
	}
}

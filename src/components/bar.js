import React from "react";
import img1 from "../assets/fpp.png";
import "./bar.css";
import { Nav, Navbar } from "react-bootstrap";

export default function BoBar() {
	return (
		<div>
			<Navbar
				expand="lg"
				sticky="top"
				variant="dark"
				style={{ backgroundColor: "black" }}
			>
				<Navbar.Brand href="/">
					<img src={img1} alt="logo" height="40px" width="40px" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/#abt-us" className="appbar">
							About Us
						</Nav.Link>
						<Nav.Link href="/events/code" className="appbar">
							Events
						</Nav.Link>
						<Nav.Link href="/comingsoon" className="appbar">
							Our Team
						</Nav.Link>
						<Nav.Link
							href="https://docs.google.com/forms/d/e/1FAIpQLSd7DvPnJlEDd-eKxSCkATL1KCcjMFyBcQy7b5_4hLJVIku2nA/viewform"
							className="appbar"
						>
							<button type="button" class="btn btn-outline-primary btn-sm">
								Register
							</button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

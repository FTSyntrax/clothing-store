import React from "react";
import logo from "../../assets/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import './header.scss';

export default function header() {
	return (
		<header>
			<Navbar collapseOnSelect expand="lg" bg="light">
				<Container>
					<Navbar.Brand href="#home">
						<img src={logo} className="img-fluid logo" alt="Logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="#link">Contact</Nav.Link>
							<NavDropdown title="Shop" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Women</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Men
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Kids
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

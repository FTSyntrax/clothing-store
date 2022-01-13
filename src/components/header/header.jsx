import React from "react";
import logo from "../../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";
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
					<LinkContainer to="/">
						<Navbar.Brand>
							<img src={logo} className="img-fluid logo" alt="Logo" />
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="/">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/contact">
								<Nav.Link>Contact</Nav.Link>
							</LinkContainer>
							<NavDropdown title="Shop" id="basic-nav-dropdown">
								<LinkContainer to="/shop/women">
									<NavDropdown.Item>Women</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/shop/men">
									<NavDropdown.Item>Men</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/shop/kids">
									<NavDropdown.Item>Kids</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

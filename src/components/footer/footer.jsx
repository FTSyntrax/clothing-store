import React from 'react'
import footerLogo from "../../assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import './footer.scss';

export default function footer() {
    return (
			<footer>
				<Container>
					<Row>
						<Col sm={12} md={4} className="footer-about">
							<img src={footerLogo} className="img-fluid logo" alt="Logo" />
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s.
							</p>
						</Col>
						<Col xs={6} md={4} className="footer-nav">
							<h6>Navigation</h6>
							<Nav className="flex-column">
								<LinkContainer to="/">
									<Nav.Link>Home</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/contact">
									<Nav.Link eventKey="link-contact">Contact</Nav.Link>
								</LinkContainer>
								<Nav.Link eventKey="link-shop" className="disabled">
									Shop
								</Nav.Link>
								<LinkContainer to="/shop/women" className="inner-links">
									<Nav.Link eventKey="link-shop">- Women</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/shop/men" className="inner-links">
									<Nav.Link eventKey="link-shop">- Men</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/shop/kids" className="inner-links">
									<Nav.Link eventKey="link-shop">- Kids</Nav.Link>
								</LinkContainer>
							</Nav>
						</Col>
						<Col xs={6} md={4} className="footer-socials">
							<h6>Find us on</h6>
							<a href="https://facebook.com" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faFacebookSquare} />
							</a>
							<a href="https://twitter.com" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faTwitterSquare} />
							</a>
							<a href="https://instagram.com" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faInstagramSquare} />
							</a>
						</Col>
					</Row>
				</Container>
			</footer>
		);
}

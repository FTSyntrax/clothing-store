import React from 'react'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import errorImage from "../../assets/sad-emoji.png";

import "./error.scss";

export default function error() {
    return (
			<Container className="error-page">
                <img src={errorImage} className='img-fluid' alt="Error Page" width="250" />
				<h1>Ohh No! The url doesn't match any of our pages...</h1>
				<span>
					Please <Link to="/">go back to homepage</Link> and try again
				</span>
			</Container>
		);
}

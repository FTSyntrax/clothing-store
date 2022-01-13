import React from 'react'
import './categorybox.scss';
import { Link } from "react-router-dom";

export default function CategoryBox({ name, image, url }) {
	const images = require.context("../../assets", true);
	const cat_image = images(`./${image}`);
    return (
			<Link to={url}>
				<div className="category">
					<img className="img-fluid" src={cat_image} alt={name} />
					<div className="content">
						<h1 className="title">{name}</h1>
						<span className="subtitle">View More</span>
					</div>
				</div>
			</Link>
		);
}

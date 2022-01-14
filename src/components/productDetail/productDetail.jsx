import React from 'react';
import './productDetail.scss';


export default function productDetail({ name, price, imageUrl }) {
	return (
		<div className="product-detail">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="product-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
		</div>
	);
};

import React from 'react';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import './productDetail.scss';


export default function productDetail({ id, name, price, imageUrl, openModal, removeProduct }) {
	return (
		<div className="product-detail">
			<Button
				className="product-button"
				variant="outline-light"
				onClick={openModal}
			>
				<div
					className="image"
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>
			</Button>
			<div className="product-footer">
				<span className="name">{name}</span>
				<span className="price">{price} EUR</span>
				<Button
					className="remove-product"
					onClick={removeProduct}
				>
					<FontAwesomeIcon icon={faTrashAlt} />
				</Button>
			</div>
		</div>
	);
};

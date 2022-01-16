import React from 'react'
import "./addProduct.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function addProduct({ lastProdID, handleSubmit }) {
	return (
		<div className="add-product-container">
			<h2>Add Product</h2>
			<Form className="add-product-form" onSubmit={handleSubmit} >
				<Form.Group className="mb-3" controlId="productId">
					<Form.Control name="product_id" type="hidden" placeholder="Product ID" defaultValue={lastProdID + 1} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="productName">
					<Form.Label>Product Name</Form.Label>
					<Form.Control name="product_name" type="text" placeholder="Product Name" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="imageUrl">
					<Form.Label>Image URL</Form.Label>
					<Form.Control name="product_img" type="text" placeholder="Image URL" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="productPrice">
					<Form.Label>Product Price</Form.Label>
					<Form.Control name="product_price" type="text" placeholder="Product Price" />
				</Form.Group>
				<Form.Group>
					<Button type="submit">Add Product</Button>
				</Form.Group>
			</Form>
		</div>
	);
}

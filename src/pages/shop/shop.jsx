import React, { Component } from 'react'
import PRODUCTS from "./products";
import SearchBox from "../../components/searchBox/searchBox";
import ProductDetail from "../../components/productDetail/productDetail";
import ProductModal from "../../components/productModal/productModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import './shop.scss';

export default class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: PRODUCTS,
			showModal: false,
			modalId: null,
			modalData: {},
			keyword: ''
		};
	}
	showModal = (e, index) => {
		this.setState({ showModal: true });
	};
	hideModal = (e, index) => {
		this.setState({ showModal: false });
	};
	handleChange = (e) => {
		this.setState({keyword: e.target.value})
	}
   
	render() {
		const { products, keyword } = this.state;
		return (
			<Container className="shop-container">
				<SearchBox onChange={this.handleChange} />
				<Row>
					{products
						.filter((product) => {
							return product.name.toLowerCase().includes(keyword.toLowerCase());
						})
						.map((product) => (
							<Col xs={6} md={4} lg={3} className="mb-4" key={product.id}>
								<Button
									className="product-button"
									variant="outline-light"
									onClick={() =>
										this.setState({
											showModal: true,
											modalData: { name: product.name, price: product.price },
										})
									}
								>
									<ProductDetail
										id={product.id}
										name={product.name}
										price={product.price}
										imageUrl={product.imageUrl}
									/>
								</Button>
							</Col>
						))}
				</Row>
				<ProductModal
					show={this.state.showModal}
					onHide={this.hideModal}
					data={this.state.modalData}
				/>
			</Container>
		);
	}
}

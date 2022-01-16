import React, { Component } from 'react'
import PRODUCTS from "./products";
import SearchBox from "../../components/searchBox/searchBox";
import ProductDetail from "../../components/productDetail/productDetail";
import ProductModal from "../../components/productModal/productModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { setSearchField, loadProducts, addProduct, removeProduct } from "../../redux/products/products.actions";
import AddProduct from '../../components/addProduct/addProduct';

import './shop.scss';

const mapStateToProps = (state) => ({
	keyword: state.keyword.keyword,
	products: state.products.products,
});

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onLoadProducts: (event) => dispatch(loadProducts(PRODUCTS)),
		onAddProduct: 	(product) => dispatch(addProduct(product)),
		removeProduct: (product_id) => dispatch(removeProduct(product_id)),
	};
};
class Shop extends Component {
	componentDidMount() {
		this.props.onLoadProducts();
	}
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			modalId: null,
			modalData: {},
		};
	}

	showModal = (e, index) => {
		this.setState({ showModal: true });
	};
	hideModal = (e, index) => {
		this.setState({ showModal: false });
	};
	addProductToggle = () => {
		let addProductBox = document.querySelector('.add-product-box');
		if(!addProductBox.classList.contains('show')) {
			 addProductBox.classList.add("show");
		} else {
			 addProductBox.classList.remove("show");
		}
	}

	addProductSubmit = (event) => {
		event.preventDefault();
		const productId = document.querySelector('.add-product-form input[name=product_id]').value;
		const productName = document.querySelector('.add-product-form input[name=product_name]').value;
		const productImage= document.querySelector('.add-product-form input[name=product_img]').value;
		const productPrice = document.querySelector('.add-product-form input[name=product_price]').value;
		if (productId.length === 0
		 || productName.length === 0
		 || productImage.length === 0
		 || productPrice.length === 0) {
			alert("Please fill in the required fields");
			return false;
		}

		const product = {	
			id: productId,
			name: productName,
			imageUrl: productImage,
			price: productPrice
		}
		this.props.onAddProduct(product);
	
	}


	render() {
		const { products, keyword, onSearchChange } = this.props;
		let lastProdID = 0;
		const filteredProducts = products.reverse().filter((product) => {
			return product.name.toLowerCase().includes(keyword.toLowerCase());
		});
		if(products.length > 0) {
			lastProdID = products.reduce(function (a, b) {
				return Math.max(a, b.id);
			}, Number.NEGATIVE_INFINITY);
		}
		return (
			<Container className="shop-container">
				<Button
					className="add-product-toggle mt-2"
					onClick={this.addProductToggle}
				>
					Add Products
				</Button>
				<div className="add-product-box">
					<AddProduct
						handleSubmit={this.addProductSubmit}
						lastProdID={lastProdID}
					/>
				</div>
				<SearchBox keyword={keyword} onChange={onSearchChange} />
				<Row>
					{filteredProducts.map((product) => (
						<Col xs={6} md={4} lg={3} className="mb-4" key={product.id}>
							<ProductDetail
								id={product.id}
								name={product.name}
								price={product.price}
								imageUrl={product.imageUrl}
								openModal={() =>
									this.setState({
										showModal: true,
										modalData: { name: product.name, price: product.price },
									})
								}
								removeProduct={() => {
									this.props.removeProduct(product.id)
								}}
							/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
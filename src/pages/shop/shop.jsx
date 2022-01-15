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
import { setSearchField, loadProducts } from "../../redux/products/products.actions";

import './shop.scss';

const mapStateToProps = (state) => ({
	keyword: state.keyword.keyword,
	products: state.products.products,
});

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onLoadProducts: (event) => dispatch(loadProducts(PRODUCTS)),
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

	render() {
		const { products, keyword, onSearchChange } = this.props;
		const filteredProducts = products.filter((product) => {
			return product.name.toLowerCase().includes(keyword.toLowerCase());
		});
		return (
			<Container className="shop-container">
				<SearchBox keyword={keyword} onChange={onSearchChange} />
				<Row>
					{filteredProducts.map((product) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
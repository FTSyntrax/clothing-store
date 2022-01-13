import React, { Component } from 'react'
import "./homepage.scss";
import CategoryBox from '../../components/category/categorybox';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
					categories: [
						{
							id: "1",
							name: "Men",
							image: "men.jpg",
							url: "shop/men",
						},
						{
							id: "2",
							name: "Women",
							image: "women.jpg",
							url: "shop/women",
						},
						{
							id: "3",
							name: "Kids",
							image: "kids.jpg",
							url: "shop/kids",
						},
					],
				};
    }
    render() {
        return (
					<div className="homepage">
                        <Container>
							<h2>Categories</h2>
                            <Row className="justify-content-center">
                            {this.state.categories.map(({ id, ...categoryProps }) => {
                                return (
                                    <Col key={id} sm={6} lg>
                                        <CategoryBox {...categoryProps} />
                                    </Col>
                                );
                            })}
                            </Row>
                        </Container>
					</div>
				);
    }
}

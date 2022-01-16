import { productsReducer } from "../redux/products/products.reducer";
import { addProduct } from "../redux/products/products.actions";
import { render, screen } from "@testing-library/react";
import ProductDetail from "../components/productDetail/productDetail";
import Shop from "../pages/shop/shop";


describe("Render Product and Add Product", () => {

    test('Should Render Product', () => {
        const { getByText } = render(<ProductDetail id="1"
								name="New Hat"
								price="250"
								imageUrl="https://i.ibb.co/RvwnBL8/pink-shirt.png" />);
    
        expect(getByText('New Hat')).toBeInTheDocument()
    });


	test("Should return the initial state", () => {
		expect(productsReducer(undefined, {})).toEqual({ products: [] });
	});

	test("Should add product to an existing list", () => {
		const previousState = {
			products: [
				{
					id: 4,
					name: "Pink T-shirt",
					imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
					price: 25,
				},
			],
		};
		expect(
			productsReducer(
				previousState,
				addProduct({
					id: 5,
					name: "Jean Long Sleeve",
					imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
					price: 40,
				})
			)
		).toEqual({
			products: [
				{
					id: 4,
					name: "Pink T-shirt",
					imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
					price: 25,
				},
				{
					id: 5,
					name: "Jean Long Sleeve",
					imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
					price: 40,
				},
			],
		});
	});
});
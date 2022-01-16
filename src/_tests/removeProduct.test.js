import { productsReducer } from "../redux/products/products.reducer";
import { removeProduct } from "../redux/products/products.actions";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductDetail from  '../components/productDetail/productDetail'

describe('Remove Product', () => {
    test("Should remove the product from the list", () => {
        const previousState = {
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
        };
        expect(
            productsReducer(
                previousState,
                removeProduct(5)
            )
        ).toEqual({
            products: [
                {
                    id: 4,
                    name: "Pink T-shirt",
                    imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
                    price: 25,
                },
            ],
        });
    });
})
import { combineReducers } from "redux";
import { filterProductsReducer, productsReducer } from "./products/products.reducer";

export default combineReducers({
	keyword: filterProductsReducer,
	products: productsReducer,
});
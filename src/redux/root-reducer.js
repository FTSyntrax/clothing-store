import { combineReducers } from "redux";
import { filterProductsReducer, loadProductsReducer } from "./products/products.reducer";

export default combineReducers({
	keyword: filterProductsReducer,
	products: loadProductsReducer,
});
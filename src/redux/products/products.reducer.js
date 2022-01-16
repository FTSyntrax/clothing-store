const INITIAL_STATE_SEARCH = {
	keyword: ""
};

const INITIAL_STATE_PRODUCTS = {
    products: []
}

export const filterProductsReducer = (state = INITIAL_STATE_SEARCH, action) => {
	switch (action.type) {
		case "CHANGE_SEARCHFIELD":
			return {
				...state,
				keyword: action.payload,
			};
		default:
			return state;
	}
};


export const productsReducer = (state = INITIAL_STATE_PRODUCTS, action) => {
	switch (action.type) {
		case "LOAD_PRODUCTS":
			return {
				...state,
				products: action.payload,
			};
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload
                ),
            };
		default:
			return state;
	}
};

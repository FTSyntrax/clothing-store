export const setSearchField = keyword => ({
    type: 'CHANGE_SEARCHFIELD',
    payload: keyword
})

export const loadProducts = (products) => ({
	type: "LOAD_PRODUCTS",
	payload: products,
});

export const addProduct = (product) => ({
	type: "ADD_PRODUCT",
	payload: product,
});

export const removeProduct = (product_id) => ({
	type: "REMOVE_PRODUCT",
	payload: product_id,
});
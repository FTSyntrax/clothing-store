export const setSearchField = keyword => ({
    type: 'CHANGE_SEARCHFIELD',
    payload: keyword
})

export const loadProducts = (products) => ({
	type: "LOAD_PRODUCTS",
	payload: products,
});
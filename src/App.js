import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import HomePage from "./pages/home/homepage";
import Contact from "./pages/contact/contact";
import Shop from "./pages/shop/shop";
import Error from "./pages/error/error";
import Footer from "./components/footer/footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/shop/*" element={<Shop />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

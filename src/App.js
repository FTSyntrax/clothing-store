import './App.css';
import Header from "./components/header/header";
import HomePage from "./pages/home/homepage";
import Footer from "./components/footer/footer";

function App() {
  return (
		<div className="App">
			<Header />
			<HomePage />
			<Footer />
		</div>
	);
}

export default App;

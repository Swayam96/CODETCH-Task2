import "./App.css";
import Cart from "./Components/Cart/Cart";
import ProductSection from "./Components/ProductSection";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Box } from "@chakra-ui/react";
function App() {
	return (
		<div className="App">
			<Box>
				{window.location.pathname === "/dashboard" ? <></> : <Navbar />}

				<AllRoutes />

				{window.location.pathname === "/dashboard" ? <></> : <Footer />}
			</Box>
		</div>
	);
}

export default App;

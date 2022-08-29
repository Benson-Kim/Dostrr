import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products/Products";
import Orders from "./pages/Orders/Orders";
import Customers from "./pages/Customers/Customers";
import Settings from "./pages/Settings/Settings";
import Messages from "./pages/Messages";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/orders' element={<Orders />} />
					<Route path='/products' element={<Products />} />
					<Route path='/customers' element={<Customers />} />
					<Route path='/messages' element={<Messages />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

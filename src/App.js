import { Routes, Route } from 'react-router-dom';

import APICall from './components/api-call.component';
import Home from './routes/home.component';
import Navigation from './routes/navigation.component';
import './App.css';
import witch from './assets/witch.jpg';

const About = () => {
	return (
		<>
			<h1>I am the about me page</h1>
			<img
				src={witch}
				alt="witch"
				style={{ width: '30%', padding: '10% 0 10% 30%', borderRadius: '10px' }}
			/>
		</>
	);
};

const Shop = () => {
	return <h1>I am the shop page</h1>;
};

const Rituals = () => {
	return <h1>I am the rituals page</h1>;
};

const FAQ = () => {
	return <h1>I am the FAQ page</h1>;
};

const Cart = () => {
	return <h1>I am the cart page</h1>;
};

const App = () => {
	return (
		<div className="page-container">
			<div className="header">
				<Routes>
					<Route path="/" className="header" element={<Navigation />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="shop" element={<Shop />} />
						<Route path="rituals" element={<Rituals />} />
						<Route path="faq" element={<FAQ />} />
						<Route path="cart" element={<Cart />} />
					</Route>
				</Routes>
			</div>
			<APICall />

			<div className="footer">
				<Routes>
					<Route path="/" className="footer" element={<Navigation />}>
						<Route path="about" element={<About />} />
						<Route path="shop" element={<Shop />} />
						<Route path="rituals" element={<Rituals />} />
						<Route path="faq" element={<FAQ />} />
						<Route path="cart" element={<Cart />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;

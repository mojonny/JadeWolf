import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import jadeLogo from '../assets/jadelogo.jpg';

import './navigation.styles.css';

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<img src={jadeLogo} className="logo" alt="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/about">
						ABOUT
					</Link>

					<Link className="nav-link" to="/shop">
						SHOP
					</Link>

					<Link className="nav-link" to="/rituals">
						RITUALS
					</Link>

					<Link className="nav-link" to="/faq">
						FAQ
					</Link>

					<Link className="nav-link" to="/cart">
						CAULDRON
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

import React from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';


function Footer() {
	return (
		<div className="footer">
			<p>Copyright &copy; {new Date().getFullYear()} <Link className="footer__link" to="/">INFOHEALTH SOLUTIONS</Link>. All rights reserved</p>

			<nav className="footer__nav">
				<ul>
					<li className="footer__list">
						<Link className="footer__link" to="/">Home</Link>
					</li>
					<li className="footer__list">
						<Link className="footer__link" to="/gallery">Gallery</Link>
					</li>
					<li className="footer__list">
						<Link className="footer__link" to="/services">Services</Link>
					</li>
					<li className="footer__list">
						<Link className="footer__link" to="/team">Team</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Footer

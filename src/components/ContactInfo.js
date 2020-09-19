import React from 'react';
import './ContactInfo.css';
import {FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaPhoneAlt, } from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import {Link} from 'react-router-dom';

function ContactInfo() {
	return (
		<div className="contactInfo">
			<div className="contactInfo__left">
				<p><FaPhoneAlt /> <span>+256 000 00000000</span></p>
				<p><FiMail /> info@react.com</p>
				<p><FaWhatsapp /> +256 000 00000000</p>
			</div>

			<div className="contactInfo__right">
				<Link className="contactInfo__link" to="/">
					<FaTwitter />
				</Link>
				<Link className="contactInfo__link contactInfo__link--facebook" to="/">
					<FaFacebook />
				</Link>
				<Link className="contactInfo__link" to="/">
					<FaLinkedin />
				</Link>
			</div>
		</div>
	)
}

export default ContactInfo

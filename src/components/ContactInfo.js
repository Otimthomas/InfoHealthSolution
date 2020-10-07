import React from "react";
import "./ContactInfo.css";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {Link} from "react-router-dom";

function ContactInfo() {
  return (
    <div className='contactInfo'>
      <div className='contactInfo__left'>
        <div className='row justify-content-center'>
          <p>
            <FaPhoneAlt /> <span>+256 772634400</span>
          </p>
          <p>
            <span>+256 789491929</span>
          </p>
          <p>
            <FiMail /> infohealthsolutions2.gmail.com
          </p>
          <p>
            <FaWhatsapp /> +256 703147479
          </p>
        </div>
      </div>

      <div className='contactInfo__right'>
        <Link className='contactInfo__link' to='/'>
          <FaTwitter />
        </Link>
        <Link className='contactInfo__link contactInfo__link--facebook' to='/'>
          <FaFacebook />
        </Link>
        <Link className='contactInfo__link' to='/'>
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}

export default ContactInfo;

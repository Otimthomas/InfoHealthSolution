import React from "react";
import {Link} from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__right'>
        <p>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link className='footer__link' to='/'>
            INFO HEALTH SOLUTIONS Ltd.
          </Link>
          <span> All rights reserved</span>
        </p>
      </div>

      <nav className='footer__nav'>
        <ul>
          <li className='footer__list'>
            <Link className='footer__link' to='/'>
              Home
            </Link>
          </li>
          <li className='footer__list'>
            <Link className='footer__link' to='/gallery'>
              Gallery
            </Link>
          </li>
          <li className='footer__list'>
            <Link className='footer__link' to='/services'>
              Services
            </Link>
          </li>
          <li className='footer__list'>
            <Link className='footer__link' to='/team'>
              Team
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;

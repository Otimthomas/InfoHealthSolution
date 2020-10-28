import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo_2.jpg";

const Header = () => {
  return (
    <>
      <header className='header'>
        <Link className='header__logo' to='/'>
          <img className='header__logo' src={logo} alt='' />
        </Link>
      </header>
    </>
  );
};

export default Header;

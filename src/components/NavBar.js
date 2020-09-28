import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from "reactstrap";
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const closeNav = () => setIsOpen(false);
  return (
    <Navbar color='light' light expand='md' sticky='top'>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink onClick={closeNav} exact activeClassName='selected' to='/'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={closeNav} activeClassName='selected' to='/about'>
              About us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={closeNav} activeClassName='selected' to='/services'>
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={closeNav} activeClassName='selected' to='/gallery'>
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={closeNav} activeClassName='selected' to='/team'>
              Team
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={closeNav} activeClassName='selected' to='/contact'>
              Contact Us
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
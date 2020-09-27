import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from "reactstrap";
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // React.useEffect(() => {
  //   setIsOpen(true)
  // }, [isOpen])


  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color='light' light expand='md' sticky='top'>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink onClick={toggle} exact activeClassName='selected' to='/'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggle} activeClassName='selected' to='/about'>
              About us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggle} activeClassName='selected' to='/services'>
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggle} activeClassName='selected' to='/gallery'>
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggle} activeClassName='selected' to='/team'>
              Team
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggle} activeClassName='selected' to='/contact'>
              Contact Us
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
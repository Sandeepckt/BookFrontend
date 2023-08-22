import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import logo from "../assets/img/logo_book.svg"
import Cart from "../assets/img/cart.svg"
function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>

      <Navbar {...args}>

        <Nav className="w-100 d-md-flex ml-auto justify-content-between flex-row d-none">
          <div className='d-inline-flex align-items-center'>
            <NavbarBrand href="/"><img src={logo} /></NavbarBrand>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Shop By Category
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Books</DropdownItem>
                <DropdownItem>Stationary</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">My Orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                FAQ
              </NavLink>
            </NavItem>
          </div>
          <div className='d-inline-flex align-items-center ml-auto'>
            <NavItem>
              <NavLink href="/login">LogIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">
              SignUp
              </NavLink>
            </NavItem>
            <NavbarBrand href="/cart" ><img src={Cart} className="cart-icon p-1" / ></NavbarBrand>
          </div>
        </Nav>

        <NavbarToggler onClick={toggle} className='d-md-none d-inline-block' />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Library
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>My Fav</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
import React, { useState } from 'react';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from 'reactstrap';
import logo from "../../assets/img/logo_book.svg";
function NavBar({size,setShow}) {

  const mystyle = {
    padding: "0 3px",
    backgroundColor: "red",
color: "white",
fontWeight: "bold",
borderRadius: "5px",
fontSize: "10px",
position: "absolute",
top: "14px",
right: "50px"
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>

      <Navbar >

        <Nav className="w-100 d-md-flex ml-auto justify-content-between flex-row d-none">
          <div className='d-inline-flex align-items-center'>
            <NavbarBrand href="/"  onClick={()=>setShow(true)} ><img src={logo}/></NavbarBrand>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>E-Books</DropdownItem>
                <DropdownItem>Video-Books</DropdownItem>
                <DropdownItem>Audio-Books</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">Lending Library</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">My self</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mylibrary">My Library</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact Us</NavLink>
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
            <NavbarBrand className="cart pt-2" ><span><i className="fas fa-cart-plus font-18" style={{color: "black"}}onClick={()=>setShow(true)}></i>
            </span>
            <span style={mystyle}>{size}</span></NavbarBrand>
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
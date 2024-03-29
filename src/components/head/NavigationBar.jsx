import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import { Button, Nav, Navbar, Image, Dropdown } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";
import cartLogo from "../../assets/cart.png";
import "./NavigationBar.css";

function NavigationBar() {
  const { handleShowLogin, handleShowRegister, isLogin, handleLogout } =
    useContext(AuthContext);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" className="mx-5 mt-3">
        <Link to="/">
          <Navbar.Brand href="/">
            <Image src={logo} fluid />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          {isLogin ? (
            <Nav>
              <Nav.Item>
                <Image src={cartLogo} height="40" className="mr-4 mt-4" />
              </Nav.Item>
              <Nav.Item>
                <Dropdown>
                  <Dropdown.Toggle className=".dropdown-toggle::after .dropdown-toggle">
                    <Image
                      src="http://www.thaicybergames.com/dota/images/heroes/101.jpg"
                      roundedCircle
                      height="70"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item classname="text-decoration-none">
                      <Link to="/user">Profile </Link>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Button
                  variant="outline-danger"
                  className="px-4 py-1"
                  onClick={handleShowLogin}
                >
                  Sign In
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Button
                  variant="danger"
                  className="px-4 py-1"
                  onClick={handleShowRegister}
                >
                  Sign Up
                </Button>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Register />
      <Login />
    </div>
  );
}

export default NavigationBar;

import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import { Button, Nav, Navbar, Image } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

function NavigationBar() {
  const { handleShowLogin, handleShowRegister } = useContext(AuthContext);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" className="mx-5 mt-3">
        <Navbar.Brand href="/">
          <Image src={logo} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link>
              <Button
                variant="danger"
                className="px-4 py-1"
                onClick={handleShowLogin}
              >
                Log In
              </Button>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Button
                variant="outline-danger"
                className="px-4 py-1"
                onClick={handleShowRegister}
              >
                Sign In
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Register />
      <Login />
    </div>
  );
}

export default NavigationBar;

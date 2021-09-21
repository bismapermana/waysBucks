import React, { useState } from "react";
import { Navbar, Nav, Image, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import Authentication from "./Authentication";

function NavigationBar() {
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const handleCloseSignin = () => setShowSignin(false);
  const handleShowSignin = () => setShowSignin(true);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" className="mx-5 mt-3">
        <Navbar.Brand href="#home">
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
                onClick={handleShowSignup}
              >
                Sign Up
              </Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button
                variant="outline-danger"
                className="px-4 py-1"
                onClick={handleShowSignin}
              >
                Sign In
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Authentication
        signupModalShow={showSignup}
        onHideSignup={handleCloseSignup}
        signinModalShow={showSignin}
        onHideSignin={handleCloseSignin}
      />
    </div>
  );
}

export default NavigationBar;

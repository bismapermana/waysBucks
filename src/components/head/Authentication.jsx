import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Authentication.css";

function Authentication({
  signupModalShow,
  onHideSignup,
  signinModalShow,
  onHideSignin,
}) {
  return (
    <div>
      <Modal show={signupModalShow} onHide={onHideSignup}>
        <Modal.Header closeButton>
          <Modal.Title className="font-weight-bolder">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <input
                className="form-style w-100 py-2 rounded"
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <input
                className="form-style w-100 py-2 rounded"
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>

            <Form.Group>
              <input
                className="form-style w-100 py-2 rounded"
                type="text"
                placeholder="Full Name"
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={onHideSignup}
              className="w-100 mt-4 py-2 btn-style"
            >
              Sign Up
            </Button>
            <p className="text-center pt-3">
              Already Have an Account? Click <b>here</b>
            </p>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={signinModalShow} onHide={onHideSignin}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <input
                className="form-style w-100 py-2 rounded"
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <input
                className="form-style w-100 py-2 rounded"
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={onHideSignup}
              className="w-100 mt-4 py-2 btn-style"
            >
              Sign Up
            </Button>
            <p className="text-center pt-3">
              Don't Have an Account? Click <b>here</b>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Authentication;

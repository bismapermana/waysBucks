import React from "react";
import { Col, Container, Row, Image, Badge } from "react-bootstrap";
import "./userComp.css";
import product from "../../assets/Product.png";
import logo from "../../assets/logo.png";
import barcode from "../../assets/qr-code.png";

const userComp = () => {
  return (
    <>
      <Container className=" mt-5">
        <Row className="justify-content-center">
          <Col lg={6} md={12} sm={12}>
            <h3 className="font-weight-bold profile-font-style ">My Profile</h3>
            <div className="media">
              <Image
                src="http://www.thaicybergames.com/dota/images/heroes/101.jpg"
                width="250"
                height="300"
              />
              <div className="ml-4">
                <h4>Full Name</h4>
                <p>Tormented Soul</p>
                <br />
                <h4>Email</h4>
                <p>tormentedsoul@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <h3>My Transaction</h3>
            <Container className="detail-transaction-style d-flex py-3 ">
              <Row className="mx-1 ">
                <Col lg={9} className="">
                  <div className="media">
                    <Image
                      src={product}
                      width="85"
                      height="110"
                      className="image-trasanction-style"
                    />
                    <div className="ml-2">
                      <h6>
                        <b>Ice Coffee Palm Sugar</b>
                      </h6>
                      <p className="text-transaction-style">
                        <b>Saturday</b> 20 March 2020
                      </p>
                      <p
                        className="text-transaction-style"
                        style={{ opacity: "0.9" }}
                      >
                        <b>Topping : </b> Bill Berry Boba, Bubble Tea Galatin
                      </p>
                      <p
                        className="text-transaction-style"
                        style={{ opacity: "0.8", marginTop: "-10px" }}
                      >
                        <b>Price : Rp. 25000 </b>
                      </p>
                    </div>
                  </div>
                  <div className="media mt-3">
                    <Image
                      src={product}
                      width="85"
                      height="110"
                      className="image-trasanction-style"
                    />
                    <div className="ml-2">
                      <h6>
                        <b>Ice Coffee Palm Sugar</b>
                      </h6>
                      <p className="text-transaction-style">
                        <b>Saturday</b> 20 March 2020
                      </p>
                      <p
                        className="text-transaction-style"
                        style={{ opacity: "0.9" }}
                      >
                        <b>Topping : </b> Bill Berry Boba, Bubble Tea Galatin
                      </p>
                      <p
                        className="text-transaction-style"
                        style={{ opacity: "0.8", marginTop: "-10px" }}
                      >
                        <b>Price : Rp. 25000 </b>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <Image src={logo} width="50" className="ml-4 mb-3" />
                  <Image src={barcode} width="70" className="ml-3" />
                  <Badge
                    variant="success"
                    className="ml-lg-3 mt-lg-3 font-weight-lighter"
                  >
                    On The Way
                  </Badge>
                  <p className="subtotal-font-style text-center mt-lg-3">
                    <b> Sub Total : Rp. 50000 </b>
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default userComp;

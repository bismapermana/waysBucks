import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import product from "../../../../assets/Product.png";

const ProductDetail = () => {
  return (
    <>
      <Container className="m-5 d-line-flex">
        <Row>
          <Col className="mr-5 d-flex justify-content-end" xs lg={6}>
            <Image src={product} fluid className="w-75 justify-content-end" />
          </Col>
          <Col>
            <div className="">
              <h1 className="font-weight-bolder">Ice Coffee Palm Sugar</h1>
              <h4 className=" mt-3">Rp. 27000,-</h4>
              <h4 className="mt-5">Topping</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;

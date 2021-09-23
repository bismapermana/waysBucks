import React from "react";
import { Card } from "react-bootstrap";
import product from "../../assets/Product.png";
import "./ProductCard.css";

function ProductCard({ loginModalShow }) {
  return (
    <div>
      <Card className="w-10 border-0 bg-product float-left mx-3 mb-3 shadow-sm">
        <Card.Img variant="top" src={product} fluid />
        <Card.Body>
          <h6>Ice Coffe Palm Sugar</h6>
          <Card.Text>
            <button
              onClick={loginModalShow}
              className="stretched-link card-btn"
            >
              Rp. 20.000,-
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="w-10 border-0 bg-product float-left mx-3 mb-3 shadow-sm">
        <Card.Img variant="top" src={product} fluid />
        <Card.Body>
          <h6>Ice Coffe Palm Sugar</h6>
          <Card.Text>Rp.20.000</Card.Text>
        </Card.Body>
      </Card>
      <Card className="w-10 border-0 bg-product float-left mx-3 mb-3 shadow-sm">
        <Card.Img variant="top" src={product} fluid />
        <Card.Body>
          <h6>Ice Coffe Palm Sugar</h6>
          <Card.Text>Rp.20.000</Card.Text>
        </Card.Body>
      </Card>
      <Card className="w-10 border-0 bg-product float-left mx-3 mb-3 shadow-sm">
        <Card.Img variant="top" src={product} fluid />
        <Card.Body>
          <h6>Ice Coffe Palm Sugar</h6>
          <Card.Text>Rp.20.000</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;

import React from "react";
import { Jumbotron, Container, Image } from "react-bootstrap";
import banner from "../../assets/Banner.png";

import "./LandingPage.css";
import ProductCard from "./ProductCard";

function LandingPage() {
  return (
    <div>
      <Jumbotron fluid className="mx-5 bg-jumbotron ">
        <Container>
          <Image src={banner} fluid />
          <h1 className="text-jumbotron">Let's Order</h1>
        </Container>
      </Jumbotron>
      <Container className="card-spacing">
        <h1></h1>
        <ProductCard />
      </Container>
    </div>
  );
}

export default LandingPage;

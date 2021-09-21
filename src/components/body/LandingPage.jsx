import React from "react";
import NavigationBar from "../head/NavigationBar";
import { Jumbotron, Container, Image } from "react-bootstrap";
import banner from "../../assets/Banner.png";
import "./LandingPage.css";
import ProductCard from "./ProductCard";

function LandingPage() {
  return (
    <div>
      <NavigationBar />

      <Jumbotron fluid className="mx-5 bg-jumbotron ">
        <Container>
          <Image src={banner} fluid />
          <h1 className="text-jumbotron">Let's Order</h1>
        </Container>
      </Jumbotron>
      <Container className="card-spacing">
        <ProductCard />
      </Container>
    </div>
  );
}

export default LandingPage;

import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import product from "../../../assets/Product.png";
import { AuthContext } from "../../../contexts/AuthContext";
import "./ProductCard.css";

function ProductCard() {
  const { handleShowLogin, isLogin } = useContext(AuthContext);

  let history = useHistory();

  const HandleAuth = () => {
    if (isLogin === false) {
      handleShowLogin();
    } else {
      history.push("/detail");
    }
  };

  return (
    <div>
      <Card className="w-10 border-0 bg-product float-left mx-3 mb-3 shadow-sm">
        <Card.Img variant="top" src={product} fluid />
        <Card.Body>
          <h6>Ice Coffe Palm Sugar</h6>
          <Card.Text>
            <button onClick={HandleAuth} className="stretched-link card-btn">
              Rp. 20.000,-
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;

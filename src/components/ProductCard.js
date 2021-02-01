import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ name, img }) => {

  return (
    <Card style={{ width: "18rem", padding: "5px", margin: "5px" }}>
      <Card.Body>
          <Card.Img style={{ display: "inline-block", width: '50%'}} variant="top" src={img} />
          <Card.Title style={{ display: "inline-block", width: '50%'}}>{name}</Card.Title>
        <Button style={{marginTop: '5px'}} variant="primary" >Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

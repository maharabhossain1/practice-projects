import React from "react";
import { Card, Col } from "react-bootstrap";

export default function MiniCart({ miniService }) {
  const { title, img, fee } = miniService;
  return (
    <Col>
      <Card className="w-75">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>Course Fee : {fee} Taka</p>
        </Card.Body>
      </Card>
    </Col>
  );
}

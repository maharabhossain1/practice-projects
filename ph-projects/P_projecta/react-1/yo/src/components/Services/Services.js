import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Cart from "../cart/Cart";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Row xs={1} md={3} className="g-4 m-4">
      {services.map((service) => (
        <Cart key={service.id} service={service} />
      ))}
    </Row>
  );
}

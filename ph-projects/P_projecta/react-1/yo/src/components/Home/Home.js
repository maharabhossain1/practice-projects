import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Homedetail from "../Homedetail/Homedetail";
import MiniCart from "../miniCart/MiniCart";

export default function Home() {
  const [miniServices, setMiniServices] = useState([]);
  useEffect(() => {
    fetch("./minidata.JSON")
      .then((res) => res.json())
      .then((data) => setMiniServices(data));
  }, []);
  return (
    <>
      <Homedetail></Homedetail>
      <div className="w-75 m-auto">
        <h1>Services</h1>
        <Row xs={1} md={4} className="m-auto g-4">
          {miniServices.map((miniService) => (
            <MiniCart key={miniService.id} miniService={miniService}></MiniCart>
          ))}
        </Row>
      </div>
    </>
  );
}

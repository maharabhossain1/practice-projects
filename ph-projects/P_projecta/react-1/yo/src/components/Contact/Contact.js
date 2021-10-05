import React from "react";
import { Button, Form } from "react-bootstrap";
import img from "./img/bg.jpg";

export default function Contact() {
  return (
    <div className="m-5 d-flex">
      <div className="w-50">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="w-75 m-auto">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write Down Some information</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="dark">Submit your mail</Button>
        </Form>
      </div>
    </div>
  );
}

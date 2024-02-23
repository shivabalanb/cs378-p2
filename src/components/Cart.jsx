import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Cart = ({ subtotal, handleClear, handleOrder }) => {
  return (
    <Navbar
      fixed="bottom"
      bg="light"
      variant="light"
      style={{ height: "5rem" }}
    >
      <Container
        className=" d-flex justify-content-evenly"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <Navbar.Brand className="pl-5 ">
          Subtotal: ${subtotal.toFixed(2)}
        </Navbar.Brand>
        <div className="  d-flex gap-3">
          <Button onClick={handleOrder}>Order</Button>
          <Button onClick={handleClear}>Clear</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Cart;

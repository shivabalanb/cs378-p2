import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({
  index,
  title,
  description,
  price,
  itemQuantity,
  setQuantity,
  imageName,
}) => {
  return (
    <Card style={{ width: "12rem", height: "25rem" }}>
      <Image src={require(`../images/${imageName}`)} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>${price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="d-flex " variant="primary">
          <Button
            disabled={itemQuantity == 0}
            onClick={() => setQuantity(index, 1, "-")}
          >
            -
          </Button>

          <Button variant="light" >
            {itemQuantity}
          </Button>
          <Button onClick={() => setQuantity(index, 1, "+")}>+</Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default MenuItem;

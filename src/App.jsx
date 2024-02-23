import "./App.css";
import MenuItem from "./components/MenuItem";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Cart from "./components/Cart";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Header from "./components/Header";

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: "Gyoza",
    description: "Japanese dumplings",
    imageName: "gyoza.png",
    price: 5.99,
  },
  {
    id: 2,
    title: "Sushi",
    description: "Japanese rice rolls",
    imageName: "sushi.png",
    price: 6.99,
  },
  {
    id: 3,
    title: "Ramen",
    description: "Japanese noodle soup",
    imageName: "ramen.png",
    price: 7.99,
  },
  {
    id: 4,
    title: "Matcha Cake",
    description: "Japanese green tea cake",
    imageName: "matcha-cake.png",
    price: 4.99,
  },
  {
    id: 5,
    title: "Mochi",
    description: "Japanese rice cake",
    imageName: "mochi.png",
    price: 3.99,
  },
  {
    id: 6,
    title: "Yakitori",
    description: "Japanese skewered chicken",
    imageName: "yakitori.png",
    price: 2.99,
  },
  {
    id: 7,
    title: "Takoyaki",
    description: "Japanese octopus balls",
    imageName: "takoyaki.png",
    price: 5.99,
  },
  {
    id: 8,
    title: "Sashimi",
    description: "Japanese raw fish",
    imageName: "sashimi.png",
    price: 8.99,
  },
  {
    id: 9,
    title: "Okonomiyaki",
    description: "Japanese savory pancake",
    imageName: "okonomiyaki.png",
    price: 6.99,
  },
  {
    id: 10,
    title: "Katsu Curry",
    description: "Japanese curry with fried pork",
    imageName: "katsu-curry.png",
    price: 9.99,
  },
];

function App() {
  const [itemQuantity, setItemQuantity] = useState(
    Array(menuItems.length + 1).fill(0)
  );

  const [subtotal, setSubtotal] = useState(0.0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setQuantity = (index, val, operator) => {
    if (val < 0) return;
    setItemQuantity((prevQuantity) => {
      const temp = [...prevQuantity];
      if (operator == "+") {
        temp[index] += val;
      } else {
        temp[index] -= val;
      }
      return temp;
    });
    const newSubtotal =
      operator == "+"
        ? subtotal + menuItems[index - 1].price
        : subtotal - menuItems[index - 1].price;

    setSubtotal(newSubtotal);
  };

  const handleClear = () => {
    setItemQuantity(Array(menuItems.length + 1).fill(0));
    setSubtotal(0.0);
  };

  return (
    <Container className="py-5">
      <Header />

      <div className="menu pb-5">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            index={item.id}
            itemQuantity={itemQuantity[item.id]}
            setQuantity={setQuantity}
            title={item.title}
            description={item.description}
            imageName={item.imageName}
            price={item.price}
          />
        ))}
      </div>

      <Cart
        subtotal={subtotal}
        handleClear={handleClear}
        handleOrder={handleShow}
      />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          {show && subtotal != 0 ? (
            itemQuantity.map((item, index) => {
              if (item > 0) {
                return (
                  <p className="h5" key={index}>
                    {item} {menuItems[index - 1].title}
                  </p>
                );
              }
            })
          ) : (
            <p className="h4">No items in cart!</p>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button onClick={handleClose}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
{
  /* Display menu items dynamicaly here by iterating over the provided menuItems */
}
export default App;

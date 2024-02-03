import React from "react";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, imageName }) => {
  return (
    <div className="item">
      <img
        class="item-img"
        src={require(`../images/${imageName}`)}
        alt=""
        srcset=""
      />
      <div className="item-content">
        <div>
          <h3 className="item-title">{title}</h3>
          <p>{description}</p>
          <br />
        </div>
        <div className="item-options">
          <p className="price">{price}</p>
          <br />
          <button className="addBtn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

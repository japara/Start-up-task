import React, { useState } from "react";

const Modal = ({ open, onClose, addItemToMenu }) => {
  const [image, setImage] = useState(null); // State to store the selected image

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAdd = () => {
    const dishName = document.getElementById("dish-name").value;
    const price = parseFloat(document.getElementById("price").value);
    const rating = parseFloat(document.getElementById("rating").value);
    const ingredients = document.getElementById("ingredients").value.split(",");
    const description = document.getElementById("description").value;

    const newItem = {
      id: String(Date.now()),
      dish_name: dishName,
      price: price,
      score: rating,
      image: image ? URL.createObjectURL(image) : "", // Using URL.createObjectURL to display selected image
      ingredients: ingredients,
      description: description,
    };

    addItemToMenu(newItem);
    onClose();
  };

  return (
    <div style={{ display: open ? "block" : "none" }}>
      <div className="modalContainer">
        <div>
          <label>please input dish name </label>
          <input type="text" name="name" id="dish-name" />
        </div>
        <div>
          <label>please input price </label>
          <input type="number" name="price" id="price" />
        </div>
        <div>
          <label>please input rating </label>
          <input type="number" name="rating" id="rating" />
        </div>
        <div>
          <label>please input image </label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <label>please input ingredients </label>
          <input type="text" name="ingredients" id="ingredients" />
        </div>
        <div>
          <label>please input description </label>
          <input type="text" name="description" id="description" />
        </div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;

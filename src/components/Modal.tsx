import React, { useState, ChangeEvent } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  addItemToMenu: (newItem: MenuItem) => void;
}

interface MenuItem {
  id: string;
  dish_name: string;
  price: number;
  score: number;
  image: string;
  ingredients: string[];
  description: string;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, addItemToMenu }) => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
    }
  };

  const handleAdd = () => {
    const dishNameElement = document.getElementById(
      "dish-name"
    ) as HTMLInputElement | null;
    const priceElement = document.getElementById(
      "price"
    ) as HTMLInputElement | null;
    const ratingElement = document.getElementById(
      "rating"
    ) as HTMLInputElement | null;
    const ingredientsElement = document.getElementById(
      "ingredients"
    ) as HTMLInputElement | null;
    const descriptionElement = document.getElementById(
      "description"
    ) as HTMLInputElement | null;

    const dishName = dishNameElement ? dishNameElement.value : "";
    const price = priceElement ? parseFloat(priceElement.value) : 0;
    const rating = ratingElement ? parseFloat(ratingElement.value) : 0;
    const ingredients = ingredientsElement
      ? ingredientsElement.value.split(",")
      : [];
    const description = descriptionElement ? descriptionElement.value : "";

    if (!dishName || !price || !rating || !ingredients) {
      return alert("please fill all the lines");
    }

    const newItem: MenuItem = {
      id: String(Date.now()),
      dish_name: dishName,
      price: price,
      score: rating,
      image: image ? URL.createObjectURL(image) : "",
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

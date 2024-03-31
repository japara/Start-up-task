import "../css/styles.css";
// import info from "../../db.json";
import star from "../images/star.svg";
import bin from "../images/bin.svg";
import { useState, useEffect } from "react";

// var data = info.menu;
// console.log(data);

interface MenuItem {
  id: string;
  image: string;
  dish_name: string;
  description: string;
  score: number;
  ingredients: string[];
  price: number;
}

function MenuCont(): JSX.Element {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await fetch("../../db.json");
      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }
      const data = await response.json();
      setMenu(data.menu);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(menu);
  return (
    <>
      {menu.map((item) => (
        <div id="menu-cont">
          <img id="menu-img" src={item.image} alt="food pic" />
          <div id="rating">
            <img src={star} alt="star" />
            <p>{item.score}</p>
          </div>
          <h4>{item.dish_name}</h4>
          <p>{item.description}</p>
          <div id="price-box">
            <h4>{item.price} $</h4>
            <div id="price-box">
              <img src={bin} alt="delete" />
              <button id="circle-btn">+</button>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
}

export default MenuCont;

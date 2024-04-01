import "../css/styles.scss";
import star from "../../public/images/star.svg";
import bin from "../../public/images/bin.svg";
import { useState, useEffect } from "react";
import Modal from "./Modal";

interface MenuItem {
  id: string;
  image: string;
  dish_name: string;
  description: string;
  score: number;
  ingredients: string[];
  price: number;
}

const MenuCont = (): JSX.Element => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await fetch("/db.json");
      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }
      const data = await response.json();
      setMenu(data.menu);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addItemToMenu = (newItem: MenuItem) => {
    setMenu([...menu, newItem]);
  };

  const handleDelete = (id: string) => {
    const updatedMenu = menu.filter((item) => item.id !== id);
    setMenu(updatedMenu);
  };

  const changePrice = (id: string) => {
    var newPrice = Number(window.prompt("Write new Price"));
    const updatedMenu = menu.map((item) => {
      if (item.id === id && item.price > 0 && newPrice) {
        return {
          ...item,
          price: newPrice,
        };
      }
      return item;
    });
    setMenu(updatedMenu);
  };

  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        addItemToMenu={addItemToMenu}
      />
      <div>
        <div>
          <h1>Top List</h1>
          <h6>Our Mainstay menu</h6>
        </div>
        <button id="add-btn" onClick={() => setOpenModal(true)}>
          + Add new item
        </button>
      </div>
      <div id="menu-container">
        {menu.map((item) => (
          <div id="menu-cont" key={item.id}>
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
                <img
                  onClick={() => handleDelete(item.id)}
                  src={bin}
                  alt="delete"
                />
                <button onClick={() => changePrice(item.id)} id="circle-btn">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuCont;

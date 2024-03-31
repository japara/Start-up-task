import "../css/styles.css";
import info from "../../db.json";
import star from "../images/star.svg";
import bin from "../images/bin.svg";

var data = info.menu;
console.log(data);

function MenuCont() {
  return (
    <>
      {data.map((item) => (
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

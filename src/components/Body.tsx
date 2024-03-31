import "../css/styles.css";
import bowl from "../images/bowl.png";
import MenuCont from "./MenuCont";
import fries from "../images/fries.png";

function Body() {
  return (
    <div>
      <div id="container">
        <div>
          <h2>Delicious Food Is Waiting for you </h2>
          <h4>
            Our team of registered nurses and skilled healthcare professionals
            provide in-home nursing
          </h4>
          <div>
            <button id="brown-btn">Food Menu</button>
            <button id="white-btn">Book a Table</button>
          </div>
        </div>
        <img id="bowl" src={bowl} alt="food bowl"></img>
      </div>
      <div>
        <div>
          <h1>Top List</h1>
          <h6>Our Mainstay menu</h6>
        </div>
        <button id="add-btn">+Add new item</button>
      </div>
      <div id="menu-container">
        <MenuCont />
      </div>
      <div id="sidebyside">
        <img src={fries} alt="french fries" />
        <div id="top-align">
          <h2>Best Potatoes For French Fries</h2>
          <p>
            Russet potatoes are ideal. since they're dense, they don't contain
            as much water inside, which allows then to get extra crispy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;

import "../css/styles.css";
import svg from "../../public/images/profile-circle.svg";

function Header() {
  return (
    <div id="container">
      <p id="logo">
        FOOD<span>EAT</span>
      </p>
      <nav>
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>
            <img src={svg} alt="profile picture" />
          </li>
          <li>
            <span id="down-arrow">&#709;</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

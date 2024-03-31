import "../css/styles.css";
import car from "../images/car.svg";
import mobile from "../images/mobile.svg";
import group from "../images/group.svg";
import tray from "../images/tray.svg";

function Footer() {
  return (
    <>
      <h3>Our Services</h3>
      <div id="footer">
        <div>
          <img src={mobile} alt="phone icon"></img>
          <p>online booking</p>
        </div>
        <div>
          <img src={tray} alt="tray icon"></img>
          <p>catering service</p>
        </div>
        <div>
          <img src={group} alt="membership icon"></img>
          <p>Membership</p>
        </div>
        <div>
          <img src={car} alt="delivery icon"></img>
          <p>Delivery service</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

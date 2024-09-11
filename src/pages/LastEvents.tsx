import "./LastEvents.css";
import past from "../assets/20231.jpg";
import past2 from "../assets/20232.jpg";
import bck from "../assets/icons8-back-button-100.png";
import { Link } from "react-router-dom";

const LastEvents = () => {
  return (
    <>
      <div className="back-btn">
        <Link to="/">
          <img src={bck} alt="" />
        </Link>
      </div>
      <div className="last-events">
        <img src={past} alt="" />
        <img src={past2} alt="" />
      </div>
    </>
  );
};

export default LastEvents;

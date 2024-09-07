import { Link } from "react-router-dom";
import backButton from "../assets/icons8-back-button-100.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <Link to="/">
            <img className="back-button-about" src={backButton} alt="back" />
          </Link>
        </div>
        <p className="p-about">アクセス / ACCESS</p>
        <div className="second-contaier">
          <div className="go-home-about">
            en.ternaling2024@outlook.com/07054085247
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

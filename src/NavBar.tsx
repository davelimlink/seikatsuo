import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="nav-logo">
            <Link className="link-logo" to="/">
              <p>生活温</p>
            </Link>
          </div>
          {/*
            <div className="nav-second">
              <div className="nav-about">
                <Link to="/about">
                  <p>ACCESS</p>
                </Link>
              </div>
              <div className="nav-contact">
                <Link to="/contactus">
                  <p>CONTACT US</p>
                </Link>
              </div>
            </div>
          */}
        </nav>
      </div>
    </>
  );
};

export default NavBar;

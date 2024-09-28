import { Link } from "react-router-dom";
import "./Shop.css";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpeg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import insta2 from "../assets/insta2.png";

const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="shop-p">
          <p>SHOPS</p>
        </div>
        <div className="shop-main-container">
          <div className="shop-container">
            <div className="shop-img">
              <img src={s1} alt="" />
              <div className="shops-info">
                <div className="name">FEEMUE KLONG TOEY</div>
                <div className="shop-insta">
                  <a href="">
                    <img src={insta2} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="shop-img">
              <img src={s2} alt="" />
              <div className="shops-info">
                <div className="name">オーガニック抹茶カフェ和み</div>
                <div className="shop-insta">
                  <a href="">
                    <img src={insta2} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="shop-img">
              <img src={s3} alt="" />
              <div className="shops-info">
                <div className="name">Terakoyaラフ</div>
                <div className="shop-insta">
                  <a href="">
                    <img src={insta2} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="shop-img">
              <img src={s4} alt="" />
              <div className="shops-info">
                <div className="name">87kitchen</div>
                <div className="shop-insta">
                  <a href="">
                    <img src={insta2} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="shop-img">
              <img src={s5} alt="" />
              <div className="shops-info">
                <div className="name">アゲイン</div>
                <div className="shop-insta">
                  <a href="">
                    <img src={insta2} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="shop-img">
              <img src={s6} alt="" />
              <div className="shops-info">
                <div className="name">MNKY</div>
                <div className="shop-insta">
                  <a href="">
                    <img src={insta2} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="more-link">
            <Link to="/moreshops">
              {" "}
              <p>More shops</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

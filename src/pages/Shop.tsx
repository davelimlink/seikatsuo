import { Link } from "react-router-dom";
import "./Shop.css";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpeg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";

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
              <p>
                FEEMUE KLONG TOEY <br />
                タイ最大のスラム 「クロントイ・スラム」発の
                ライフスタイルブランド
              </p>
            </div>
            <div className="shop-img">
              <img src={s2} alt="" />
              <p>オーガニック抹茶カフェ和み</p>
            </div>
            <div className="shop-img">
              <img src={s3} alt="" />
              <p>
                Terakoyaラフ <br />
                まなびと学童保育の Terakoyaラフです。
                科学実験を体験できるワークショップ
              </p>
            </div>
            <div className="shop-img">
              <img src={s4} alt="" />
              <p>
                87kitchen
                <br />
                国産米粉チュロスをぜひ お試し下さい。
              </p>
            </div>
            <div className="shop-img">
              <img src={s5} alt="" />
              <p>
                アゲイン
                <br />
                本場宮崎県産鶏の炭火焼！ 炭火の薫りがたまらない。
                若鶏、親鶏、せせり、ハラミなど 是非ご賞味下さい。
              </p>
            </div>
            <div className="shop-img">
              <img src={s6} alt="" />
              <p>
                MNKY <br />
                編み小物 デニムリメイクのバッグなど
              </p>
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
    </>
  );
};

export default Shop;

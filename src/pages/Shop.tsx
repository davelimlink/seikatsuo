import { Link } from "react-router-dom";
import "./Shop.css";

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
              <img src="src/assets/katsuo-photos/002 - FEEMUE.jpg" alt="" />
              <p>
                FEEMUE KLONG TOEY <br />
                タイ最大のスラム 「クロントイ・スラム」発の
                ライフスタイルブランド
              </p>
            </div>
            <div className="shop-img">
              <img
                src="src/assets/katsuo-photos/5D788E80-7B68-42A9-A61D-381C63643DE6 - オーガニック抹茶カフェ和み.jpeg"
                alt=""
              />
              <p>オーガニック抹茶カフェ和み</p>
            </div>
            <div className="shop-img">
              <img
                src="src/assets/katsuo-photos/7 (1) - 株式会社ラフ.JPG"
                alt=""
              />
              <p>
                Terakoyaラフ <br />
                まなびと学童保育の Terakoyaラフです。
                科学実験を体験できるワークショップ
              </p>
            </div>
            <div className="shop-img">
              <img
                src="src/assets/katsuo-photos/87ｋｉｔｃｈｅｎ.jpeg"
                alt=""
              />
              <p>
                87kitchen
                <br />
                国産米粉チュロスをぜひ お試し下さい。
              </p>
            </div>
            <div className="shop-img">
              <img
                src="src/assets/katsuo-photos/20221118_175237 - アゲイン.jpg"
                alt=""
              />
              <p>
                アゲイン
                <br />
                本場宮崎県産鶏の炭火焼！ 炭火の薫りがたまらない。
                若鶏、親鶏、せせり、ハラミなど 是非ご賞味下さい。
              </p>
            </div>
            <div className="shop-img">
              <img
                src="src/assets/katsuo-photos/20230721_091430~2 - MNKYミンキー.jpg"
                alt=""
              />
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

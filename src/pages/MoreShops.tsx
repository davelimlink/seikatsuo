import { Link } from "react-router-dom";
import backButton from "../assets/icons8-back-button-100.png";
import "./MoreShops.css";

const MoreShops = () => {
  return (
    <>
      {" "}
      <div className="moreshops-back-btn">
        <Link to="/">
          <img className="" src={backButton} alt="back" />
        </Link>
      </div>
      <div className="moreshops-h2">
        <h2>Shops</h2>
      </div>
      <div className="moreshops">
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/antiquegarden.JPEG" alt="" />
          <p>
            Antique Garden
            <br />
            ドライフラワーを使った雑貨を 販売します。
          </p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/aoao❀emmaco.JPEG" alt="" />
          <p>aoao❀emmaco</p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/Cafeoおがわ.jpg" alt="" />
          <p>Cafeoおがわ</p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/COCOmone.jpeg" alt="" />
          <p>
            COCOmone
            <br />
            パンケーキに厚みを出すべく独自の 配合と焼きにこだわり、ふわっと
            した食感を実現させました。
          </p>
        </div>
        <div className="more-shops-img">
          <img
            src="src/assets/katsuo-photos/EACA7F62-B97D-4414-B525-BB8E4DEF4CD3 - takumi suzuki (miwa).png"
            alt=""
          />
          <p>
            miwa moto factory <br />
            レーザー加工
          </p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/elly acce.jpeg" alt="" />
          <p>
            elly accessory
            <br />
            ヴィンテージボタンのアクセサリー をつくっています。
          </p>
        </div>

        <div className="more-shops-img">
          <img
            src="src/assets/katsuo-photos/IMG_3921 - 松永つぶら  つぶや.jpeg"
            alt=""
          />
          <p>
            つぶ屋
            <br />
            タティングレースアクセサリー
          </p>
        </div>
        <div className="more-shops-img">
          <img
            src="src/assets/katsuo-photos/IMG_8739 - 藤森美智子  RinRIn.jpeg"
            alt=""
          />
          <p>
            RinRin
            <br />
            布、水引きアクセサリー 編みぐるみetc.
          </p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/IMG_8858 -fluffy.jpeg" alt="" />
          <p>
            fluffy <br />
            ドーナツは優しい甘味が広がる、 ふわっと食感を追求しました🍩
            見た目にもこだわっており、 写真映えもばっちりです！
          </p>
        </div>
        <div className="more-shops-img">
          <img
            src="src/assets/katsuo-photos/inbound7569634815957986395 - チェるびっく.jpg"
            alt=""
          />
          <p>
            CHERUBIC PLUS 量り売りと雑貨 <br />
            ナッツや乾物、焼き菓子等 必要なものを必要な分購入できる
            量り売り専門店。 持ち帰り容器の持参がオススメ。
          </p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/Kiのむくまま.jpeg" alt="" />
          <p>
            Kiのむくまま <br />
            木の実や小枝を使ったナチュラルで 心温まる木工雑貨を
            作成販売しています。
          </p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/MOCHA.JPEG" alt="" />
          <p>
            MOCHA <br />
            プリザーブドフラワーのアレンジ お花のアクセサリーを つくっています。
          </p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/wannyan.50.jpeg" alt="" />
          <p>
            wannyan.50
            <br />
            スカンディアモスアート ワークショップ
          </p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/アート体験カフェen.png" alt="" />
          <p>アート体験カフェ</p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/こめこたこやきこばん.jpg" alt="" />
          <p>こめこたこやきこばん</p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/フレンチフライ.jpeg" alt="" />
          <p>
            フレンチフライ <br />
            じゃがいもから手作りしている ベルギースタイルのフレンチフライ です！
            揚げたてのフレンチフライを どうぞ！
          </p>
        </div>
        <div className="more-shops-img">
          <img src="src/assets/katsuo-photos/一新食堂.jpeg" alt="" />
          <p>一新食堂</p>
        </div>
      </div>
    </>
  );
};

export default MoreShops;

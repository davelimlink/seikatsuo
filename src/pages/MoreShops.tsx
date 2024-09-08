import { Link } from "react-router-dom";
import backButton from "../assets/icons8-back-button-100.png";
import "./MoreShops.css";
import s7 from "../assets/s7.jpeg";
import s8 from "../assets/s8.jpeg";
import s9 from "../assets/s9.jpg";
import s10 from "../assets/s10.jpeg";
import s11 from "../assets/s11.png";
import s12 from "../assets/s12.jpeg";
import s13 from "../assets/s13.jpeg";
import s14 from "../assets/s14.jpeg";
import s15 from "../assets/s15.jpeg";
import s16 from "../assets/s16.jpg";
import s17 from "../assets/s17.jpeg";
import s18 from "../assets/s18.jpeg";
import s19 from "../assets/s19.jpeg";
import s20 from "../assets/s20.png";
import s21 from "../assets/s21.jpg";
import s22 from "../assets/s22.jpeg";
import s23 from "../assets/s23.jpeg";
import s24 from "../assets/s24.jpeg";

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
          <img src={s7} alt="" />
          <p>
            Antique Garden
            <br />
            ドライフラワーを使った雑貨を 販売します。
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s8} alt="" />
          <p>aoao❀emmaco</p>
        </div>
        <div className="more-shops-img">
          <img src={s9} alt="" />
          <p>Cafeoおがわ</p>
        </div>
        <div className="more-shops-img">
          <img src={s10} alt="" />
          <p>
            COCOmone
            <br />
            パンケーキに厚みを出すべく独自の 配合と焼きにこだわり、ふわっと
            した食感を実現させました。
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s11} alt="" />
          <p>
            miwa moto factory <br />
            レーザー加工
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s12} alt="" />
          <p>
            elly accessory
            <br />
            ヴィンテージボタンのアクセサリー をつくっています。
          </p>
        </div>

        <div className="more-shops-img">
          <img src={s13} alt="" />
          <p>
            つぶ屋
            <br />
            タティングレースアクセサリー
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s14} alt="" />
          <p>
            RinRin
            <br />
            布、水引きアクセサリー 編みぐるみetc.
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s15} alt="" />
          <p>
            fluffy <br />
            ドーナツは優しい甘味が広がる、 ふわっと食感を追求しました🍩
            見た目にもこだわっており、 写真映えもばっちりです！
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s16} alt="" />
          <p>
            CHERUBIC PLUS 量り売りと雑貨 <br />
            ナッツや乾物、焼き菓子等 必要なものを必要な分購入できる
            量り売り専門店。 持ち帰り容器の持参がオススメ。
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s17} alt="" />
          <p>
            Kiのむくまま <br />
            木の実や小枝を使ったナチュラルで 心温まる木工雑貨を
            作成販売しています。
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s18} alt="" />
          <p>
            MOCHA <br />
            プリザーブドフラワーのアレンジ お花のアクセサリーを つくっています。
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s19} alt="" />
          <p>
            wannyan.50
            <br />
            スカンディアモスアート ワークショップ
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s20} alt="" />
          <p>アート体験カフェ</p>
        </div>
        <div className="more-shops-img">
          <img src={s21} alt="" />
          <p>こめこたこやきこばん</p>
        </div>
        <div className="more-shops-img">
          <img src={s22} alt="" />
          <p>
            フレンチフライ <br />
            じゃがいもから手作りしている ベルギースタイルのフレンチフライ です！
            揚げたてのフレンチフライを どうぞ！
          </p>
        </div>
        <div className="more-shops-img">
          <img src={s23} alt="" />
          <p>一新食堂</p>
        </div>
        <div className="more-shops-img">
          <img src={s24} alt="" />
          <p>食堂カフェ ぶりこ。</p>
        </div>
      </div>
    </>
  );
};

export default MoreShops;

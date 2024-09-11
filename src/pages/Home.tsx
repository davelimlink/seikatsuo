import "./Home.css";
import seakatsuo from "../assets/0001.png";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="image">
          <div className="home-p">
            <h2>
              2024.10.6
              <span>SUN</span>
            </h2>
          </div>
          <img className="img-logo" src={seakatsuo} alt="logo" />
        </div>
        <div className="home-p">
          <h3>荒天の場合は、開催中止となります</h3>
          <h3>in 蓬莱橋897.4広場 10:00〜15:00</h3>
          <h3>入場無料 / 🅿︎専用駐車場 有</h3>
          <h2>
            日常の中で音を楽しみ、人の温かさを感じる空間を 創造するマルシェ
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;

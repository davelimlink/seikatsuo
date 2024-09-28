import "./Artist.css";
import artist1 from "../assets/a1.png";
import artist2 from "../assets/a2.jpg";
import artist3 from "../assets/a3.jpg";
import artist4 from "../assets/a4.jpg";
import insta1 from "../assets/insta.png";

const Artist = () => {
  return (
    <>
      <div className="artist">
        <div className="artist-guest">
          <p>アーティスト</p>
        </div>

        <div className="artist-container">
          <div className="artist-photo-container">
            <img src={artist1} alt="" />
            <div className="artist-name-social">
              <div className="a-name">マチャ</div>
              <div>
                <a
                  href="https://www.instagram.com/lovely_summer_cha/"
                  target="_blank"
                >
                  <img className="insta-img" src={insta1} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="artist-photo-containers">
            <div className="artist-photo-container">
              <img src={artist2} alt="" />
              <div className="artist-name-social">
                <div className="a-name">クララズ</div>
                <div>
                  <a href="https://www.instagram.com/clalas_/" target="_blank">
                    <img className="insta-img" src={insta1} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="artist-photo-containers">
            <div className="artist-photo-container">
              <img src={artist3} alt="" />
              <div className="artist-name-social">
                <div className="a-name">遠藤美月</div>
                <div>
                  <a
                    href="https://www.instagram.com/miduki02gr/"
                    target="_blank"
                  >
                    <img className="insta-img" src={insta1} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="artist-photo-containers">
            <div className="artist-photo-container">
              <img src={artist4} alt="" />
              <div className="artist-name-social">
                <div className="a-name">工藤将也</div>
                <div>
                  <a
                    href="https://www.instagram.com/kudomasso/"
                    target="_blank"
                  >
                    <img className="insta-img" src={insta1} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;

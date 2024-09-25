import "./Artist.css";
import artist1 from "../assets/a1.png";
import artist2 from "../assets/a2.jpg";
import artist3 from "../assets/a3.jpg";
import artist4 from "../assets/a4.jpg";

const Artist = () => {
  return (
    <>
      <div className="artist">
        <div className="artist-guest">
          <p>アーティスト</p>
        </div>

        <div className="artist-container">
          <div className="artist-photo-containers">
            <div className="artist-photo-container">
              <img src={artist1} alt="" />
              <p>マチャ</p>
              <p className="insta">Instagram: @lovely_summer_cha</p>
            </div>
          </div>

          <div className="artist-photo-containers">
            <div className="artist-photo-container">
              <img src={artist2} alt="" />
              <p>クララズ</p>
              <p className="insta">Instagram: @clalas_</p>
            </div>
          </div>

          <div className="artist-photo-containers">
            <div className="artist-photo-container">
              <img src={artist3} alt="" />
              <p>遠藤美月</p>
              <p className="insta">Instagram: @miduki02gr</p>
            </div>
          </div>

          <div className="artist-photo-containers">
            <div className="artist-photo-container">
              <img src={artist4} alt="" />
              <p>工藤将也</p>
              <p className="insta">Instagram: @kudomasso</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;

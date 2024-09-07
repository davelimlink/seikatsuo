import "./Artist.css";
import artist1 from "../assets/a1.png";

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
            <p>マチャ</p>
            <p className="insta">Instagram: @lovely_summer_cha</p>
          </div>
          <div className="artist-photo-container">
            <img src="" alt="" />
            <p>クララズ</p>
            <p className="insta">Instagram: @clalas_</p>
          </div>
          <div className="artist-photo-container">
            <img
              src="src/assets/katsuo-photos/artist/IMG_6261 - 遠藤美月.jpeg"
              alt=""
            />
            <p>遠藤美月</p>
            <p className="insta">Instagram: @miduki02gr</p>
          </div>
          <div className="artist-photo-container">
            <img src="src/assets/katsuo-photos/artist/工藤将也.JPEG" alt="" />
            <p>工藤将也</p>
            <p className="insta">Instagram: @kudomasso</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;

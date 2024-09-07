import "./Location.css";

const Location = () => {
  return (
    <>
      <div className="location">
        <div className="location-p">
          <p>アクセス</p>
        </div>
        <div className="location-main-container">
          <div className="location-container">
            <div className="iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.2451938835866!2d138.1840523!3d34.82492719999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a51ed8ad5104b%3A0x7fed09219b917e06!2z6JOs6I6x5qmLIDg5Ny405bqD5aC0!5e0!3m2!1sen!2sjp!4v1725682845204!5m2!1sen!2sjp"
                loading="lazy"
              />
            </div>
            <div className="location-dets">
              <h3>蓬莱橋897.4広場 〒427-0113 静岡県島田市南2丁目地先</h3>
              <h3> 10:00〜15:00 入場無料 🅿︎専用駐車場 有</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;

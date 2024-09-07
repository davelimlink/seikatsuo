import "./Reminder.css";

const Reminder = () => {
  return (
    <>
      <div className="reminder">
        <div>
          <div className="reminder-container">
            <div className="reminder-title">
              ご来場のお客様へ <br />
              ●当日は暑くなることが予想されます。熱中症には十分ご注意いただき、
              各自で暑さ対策をお願いします。
              <br />
              ●発熱のある方、風邪のような症状のある方のご来場はご遠慮ください。
              <br />
              ●駐車場内に誘導員がおりますので誘導員の指示に従ってください。
              <br />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reminder;

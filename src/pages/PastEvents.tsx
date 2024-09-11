import { Link } from "react-router-dom";
import "./PastEvents.css";

function PastEvents() {
  return (
    <>
      <div className="past-events">
        <p>EVENTS</p>
        <br />

        <div className="events-year">
          <Link to="/lastevents">
            <p>2023.10.01 SUNDAY </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PastEvents;

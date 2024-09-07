import { Link } from "react-router-dom";
import "./PastEvents.css";

function PastEvents() {
  return (
    <>
      <div className="past-events">
        <div className="past-events-container">
          <div className="past-events-p">
            <p>Past Events</p>
          </div>
          <div className="events-year">
            <Link to="/lastevents">
              <p>2023</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PastEvents;

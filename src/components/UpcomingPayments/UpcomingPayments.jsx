import "./UpcomingPayments.scss";
import timeBarElec from "../../assets/images/elec-progress-bar.png";
import timeBarRent from "../../assets/images/rent-progress-bar.png";
import { Link } from "react-router-dom";

export default function UpcomingPayments() {
  return (
    <section className="payments">
      <div className="payments__title"> My Upcoming Payments</div>
      <div className="payments__box">
        <div className="payments__box-top">
          <div className="payments__info">
            <span className="payments__info-title">Electricity Bill</span>
            <div className="payments__info-details">
              {" "}
              Total: <span className="payments__info-data"> £40 </span>{" "}
            </div>
            <div className="payments__info-details">
              {" "}
              Due: <span className="payments__info-data">
                {" "}
                2 Days Left{" "}
              </span>{" "}
            </div>
          </div>
          <Link className="payments__button payments__button-highlight">
            Need Support?
          </Link>
        </div>
        <img src={timeBarElec} alt="Yellow timebar" className="payments__img" />
      </div>

      <div className="payments__box">
        <div className="payments__box-top">
          <div className="payments__info">
            <span className="payments__info-title">Rent</span>
            <div className="payments__info-details">
              {" "}
              Total: <span className="payments__info-data"> £300 </span>{" "}
            </div>
            <div className="payments__info-details">
              {" "}
              Due: <span className="payments__info-data">
                {" "}
                15 Days Left{" "}
              </span>{" "}
            </div>
          </div>
          <Link className="payments__button">Pay now?</Link>
        </div>
        <img
          src={timeBarRent}
          alt="Turquoise timebar"
          className="payments__img"
        />
      </div>
    </section>
  );
}

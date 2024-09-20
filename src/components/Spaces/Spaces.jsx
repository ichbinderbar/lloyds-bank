import "./Spaces.scss";
import gaugeIcon from "../../assets/icons/gauge.png";
import piggyIcon from "../../assets/icons/piggy-bank-solid.svg";
import cardIcon from "../../assets/icons/credit-cards-payment.png";

export default function Spaces() {
  return (
    <section className="spaces">
      <div className="spaces__title">My Spaces</div>
      <article className="spaces__card spaces__card--top">
        <div className="spaces__icon-container">
          <div className="spaces__creditcard">
            <img src={cardIcon} alt="" className="spaces__card-icon" />
          </div>
        </div>
        <div className="spaces__card-content">
          <h3 className="spaces__card-header">Everyday</h3>
          <p className="spaces__card-text">
            Stay on top of your finance with our tools and insights
          </p>
        </div>
      </article>

      <article className="spaces__card">
        <div className="spaces__icon-container">
          <div className="spaces__pig">
            <img src={piggyIcon} alt="" className="spaces__card-icon" />
          </div>
        </div>
        <div className="spaces__card-content">
          <h3 className="spaces__card-header">Save & Invest</h3>
          <p className="spaces__card-text">
            Build your financial future and track your growth
          </p>
        </div>
      </article>

      <article className="spaces__card">
        <div className="spaces__icon-container">
          <div className="spaces__gauge">
            <img src={gaugeIcon} alt="" className="spaces__card-icon" />
          </div>
        </div>
        <div className="spaces__card-content">
          <h3 className="spaces__card-header">Borrow</h3>
          <p className="spaces__card-text">
            Check your credit score and see your borrowing options
          </p>
        </div>
      </article>
    </section>
  );
}

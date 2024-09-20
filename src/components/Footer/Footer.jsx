import "./Footer.scss";
import searchIcon from "../../assets/icons/search.svg";
import applyIcon from "../../assets/icons/apply.png";
import paymentsIcon from "../../assets/icons/two-arrows.png";
import homeIcon from "../../assets/icons/homepage.png";
import cardsIcon from "../../assets/icons/credit-card-regular.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__link footer__link--active">
        <img src={homeIcon} alt="" className="footer__icon" />
        <p className="footer__text">
          <strong>Home</strong>
        </p>
      </div>
      <div className="footer__link">
        <img src={applyIcon} alt="" className="footer__icon" />
        <p className="footer__text">Apply</p>
      </div>
      <div className="footer__link">
        <img src={paymentsIcon} alt="" className="footer__icon" />
        <p className="footer__text">Payments</p>
      </div>
      <div className="footer__link">
        <img src={paymentsIcon} alt="" className="footer__icon" />
        <p className="footer__text">Search</p>
      </div>
      <div className="footer__link">
        <img src={cardsIcon} alt="" className="footer__icon" />
        <p className="footer__text">Cards</p>
      </div>
    </footer>
  );
}

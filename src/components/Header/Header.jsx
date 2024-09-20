import "./Header.scss";
import mailIcon from "../../assets/icons/envelope-regular.svg";
import questionIcon from "../../assets/icons/question-solid.svg";
import profileIcon from "../../assets/icons/user-regular.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <img
          src={mailIcon}
          alt="Mail icon image"
          className="header__img header__img-mail"
        />
        <h1 className="header__title">Hi Malik</h1>
        <div className="header__container-right">
          <div className="header__img-question-div">
            <img
              src={questionIcon}
              alt="question mark icon"
              className="header__img header__img-question"
            />
          </div>
          <img
            src={profileIcon}
            alt="human profile icon"
            className="header__img header__img-profile"
          />
        </div>
      </div>
      <div className="header__bottom">
        <span className="header__button header__button-clicked"> Summary</span>
        <span className="header__button">Everyday</span>
        <span className="header__button">Save & Invest</span>
      </div>
    </header>
  );
}

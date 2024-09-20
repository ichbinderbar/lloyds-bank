import "./Notification.scss";
import icon from "../../assets/icons/shield-halved-solid.svg";

export default function Notification() {
  return (
    <div className="notification">
      <img className="notification__icon" src={icon} />
      <p className="notification__message">
        We noticed some unusual activity on your account. It's ok we are here to
        support you
      </p>
      <div className="notification__button">Tap here to get support</div>
    </div>
  );
}

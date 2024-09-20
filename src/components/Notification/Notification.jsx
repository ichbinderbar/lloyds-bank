export default function Notification() {
  return (
    <div className="notification">
      <img className="notification__icon" src={icon} />
      <p className="notification__message"></p>
      <div className="notification__button"></div>
    </div>
  );
}

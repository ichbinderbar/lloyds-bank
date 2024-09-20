import "./Home.scss";
import Notification from "../../components/Notification/Notification";
import UpcomingPayments from "../../components/UpcomingPayments/UpcomingPayments";

export default function Home() {
  return (
    <div className="home">
      <UpcomingPayments />
      <Notification />
    </div>
  );
}

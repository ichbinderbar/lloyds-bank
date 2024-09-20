import "./Home.scss";
import Notification from "../../components/Notification/Notification";
import MainAccountOverview from "../../components/MainAccountOverview/MainAccountOverview";
import Spaces from "../../components/Spaces/Spaces";
import UpcomingPayments from "../../components/UpcomingPayments/UpcomingPayments";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__main-container">
        <MainAccountOverview />
        <Notification />
      </div>
      <UpcomingPayments />
      <Spaces />
    </div>
  );
}

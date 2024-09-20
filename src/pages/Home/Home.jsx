import "./Home.scss";
import Notification from "../../components/Notification/Notification";
import MainAccountOverview from "../../components/MainAccountOverview/MainAccountOverview";

export default function Home() {
  return (
    <div className="home">
      <div className="home__main-container">
        <MainAccountOverview />
        <Notification />
      </div>
    </div>
  );
}

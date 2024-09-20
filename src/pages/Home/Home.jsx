import "./Home.scss";
import Notification from "../../components/Notification/Notification";
import MainAccountOverview from "../../components/MainAccountOverview/MainAccountOverview";
import Spaces from "../../components/Spaces/Spaces";

export default function Home() {
  return (
    <div className="home">
      <div className="home__main-container">
        <MainAccountOverview />
        <Notification />
      </div>
      <Spaces />
    </div>
  );
}

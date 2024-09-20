import "./Home.scss";
import Notification from "../../components/Notification/Notification";
import MainAccountOverview from "../../components/MainAccountOverview/MainAccountOverview";
import Spaces from "../../components/Spaces/Spaces";
import UpcomingPayments from "../../components/UpcomingPayments/UpcomingPayments";
import { useState } from "react";

export default function Home() {
  const [showUpcomingPayments, setUpcomingPayments] = useState(false);

  return (
    <div className="home">
      <div
        className={`home__main-container ${
          showUpcomingPayments ? "home__main-container--hidden" : ""
        }`}
      >
        <MainAccountOverview />
        {showUpcomingPayments ? (
          <></>
        ) : (
          <Notification setUpcomingPayments={setUpcomingPayments} />
        )}
      </div>
      {showUpcomingPayments && <UpcomingPayments />}
      <Spaces />
    </div>
  );
}

import profilePic from "../images/image-jeremy.png";
import scss from "../styles/modules/UserCard.module.scss";

function UserCard({ timeframe, changeTimeframe }) {
  return (
    <div className={scss.user_card}>
      <div className={scss.user}>
        <img src={profilePic} alt="user" className={scss.profile_pic} />
        <div>
          <div className={scss.report}>Report for</div>
          <h1 className={scss.user_name}>Jeremy Robson</h1>
        </div>
      </div>
      <div className={scss.timeframes}>
        <span
          className={timeframe === "daily" ? scss.active : ""}
          onClick={() => changeTimeframe("daily")}
        >
          Daily
        </span>
        <span
          className={timeframe === "weekly" ? scss.active : ""}
          onClick={() => changeTimeframe("weekly")}
        >
          Weekly
        </span>
        <span
          className={timeframe === "monthly" ? scss.active : ""}
          onClick={() => changeTimeframe("monthly")}
        >
          Monthly
        </span>
      </div>
    </div>
  );
}

export default UserCard;

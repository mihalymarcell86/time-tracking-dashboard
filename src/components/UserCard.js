import profilePic from "../images/image-jeremy.png";
import scss from "../styles/modules/UserCard.module.scss";

function UserCard(props) {
  return (
    <div className={scss.user_card}>
      <div className={scss.user}>
        <img src={profilePic} alt="user" className={scss.profile_pic} />
        <div>
          <div className={scss.report}>Report for</div>
          <div className={scss.user_name}>Jeremy Robson</div>
        </div>
      </div>
      <div className={scss.timeframes}>
        <span>Daily</span>
        <span className={scss.active}>Weekly</span>
        <span>Monthly</span>
      </div>
    </div>
  );
}

export default UserCard;

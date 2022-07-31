import scss from "../styles/modules/ReportCard.module.scss";
import IconEllipsis from "./SVG/IconEllipsis";

function ReportCard({ data }) {
  const title = data.title.toLowerCase().replace(" ", "-");

  return (
    <div className={`${scss.card} ${scss[title]}`}>
      <div className={scss.stats}>
        <div className={scss.top_row}>
          <div className={scss.activity}>{data.title}</div>
          <IconEllipsis />
        </div>
        <div className={scss.bottom_row}>
          <div
            className={scss.time}
          >{`${data.timeframes.weekly.current}hrs`}</div>
          <div
            className={scss.previous_time_frame}
          >{`Last Week - ${data.timeframes.weekly.previous}hrs`}</div>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;

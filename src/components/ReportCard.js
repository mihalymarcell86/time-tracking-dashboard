import scss from "../styles/modules/ReportCard.module.scss";
import IconEllipsis from "./SVG/IconEllipsis";

function ReportCard({ data, timeframe }) {
  const title = data.title.toLowerCase().replace(" ", "-");
  let lastPeriod;

  switch (timeframe) {
    case "daily":
      lastPeriod = "Yesterday";
      break;
    case "weekly":
      lastPeriod = "Last Week";
      break;
    default:
      lastPeriod = "Last Month";
      break;
  }

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
          >{`${data.timeframes[timeframe].current}hrs`}</div>
          <div
            className={scss.previous_time_frame}
          >{`${lastPeriod} - ${data.timeframes[timeframe].previous}hrs`}</div>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;

import { useState } from "react";
import UserCard from "./components/UserCard";
import ReportCard from "./components/ReportCard";
import Attribution from "./components/Attribution";

import scss from "./styles/modules/App.module.scss";
import data from "./data/data.json";

function App() {
  const [timeframe, setTimeframe] = useState("weekly");

  const report = data.map((item) => (
    <ReportCard data={item} key={item.title} timeframe={timeframe} />
  ));

  return (
    <>
      <main className={scss.main}>
        <UserCard
          timeframe={timeframe}
          changeTimeframe={(value) => setTimeframe(value)}
        />
        {report}
      </main>
      <Attribution />
    </>
  );
}

export default App;

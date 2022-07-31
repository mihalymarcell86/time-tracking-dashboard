import data from "./data/data.json";

import UserCard from "./components/UserCard";
import ReportCard from "./components/ReportCard";
// import Attribution from "./components/Attribution";
//TODO: move JSON import into ReportCard component

import scss from "./styles/modules/App.module.scss";

function App() {
  const report = data.map((item) => (
    <ReportCard data={item} key={item.title} />
  ));

  return (
    <>
      <main className={scss.main}>
        <UserCard />
        {report}
      </main>
      {/* <Attribution /> */}
    </>
  );
}

export default App;

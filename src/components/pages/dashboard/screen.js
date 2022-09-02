import { DashboardPage } from "../../organisms";

import Services from "./service";
const Dashboard = () => {
  const { dataPortofolio, dataClient, dataAboutUs, dataTeam } = Services();
  console.log("data business", dataAboutUs);
  return (
    <DashboardPage
      dataPortofolio={dataPortofolio}
      dataClient={dataClient}
      dataAboutUs={dataAboutUs}
      dataTeam={dataTeam}
    />
  );
};

export default Dashboard;

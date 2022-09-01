import { DashboardPage } from "../../organisms";

import Services from "./service";
const Dashboard = () => {
  const { dataPortofolio } = Services();
  return <DashboardPage dataPortofolio={dataPortofolio} />;
};

export default Dashboard;

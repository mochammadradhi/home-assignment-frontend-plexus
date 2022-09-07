import { DashboardPage } from "../../organisms";
import Services from "./service";

const Dashboard = () => {
  const { dataPortofolio, dataClient, dataAboutUs, dataTeam, loading } =
    Services();

  return (
    <>
      <DashboardPage
        dataPortofolio={dataPortofolio}
        dataClient={dataClient}
        dataAboutUs={dataAboutUs}
        dataTeam={dataTeam}
        loading={loading}
      />
    </>
  );
};

export default Dashboard;

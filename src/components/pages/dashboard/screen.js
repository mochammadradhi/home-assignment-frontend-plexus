import { DashboardPage } from "../../organisms";

import Services from "./service";
import { useState, useEffect } from "react";
const Dashboard = () => {
  const { dataPortofolio, dataClient, dataAboutUs, dataTeam } = Services();

  return (
    <>
      <DashboardPage
        dataPortofolio={dataPortofolio}
        dataClient={dataClient}
        dataAboutUs={dataAboutUs}
        dataTeam={dataTeam}
      />
    </>
  );
};

export default Dashboard;

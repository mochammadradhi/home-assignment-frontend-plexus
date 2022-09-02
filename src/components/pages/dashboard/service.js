import { useEffect, useState } from "react";
import { GlobalGet } from "../../../helpers/fetcher";
import Environtment from "../../../constant/environtment.json";
const Services = () => {
  const { API_PLEXUS__URL } = Environtment;
  const [dataPortofolio, setDataPortofolio] = useState([]);
  const [dataClient, setDataClient] = useState([]);
  const [dataAboutUs, setDataAboutUs] = useState([]);
  const [dataTeam, setDataTeam] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPortofolio = async () => {
    setLoading(true);
    try {
      const response = await GlobalGet({
        url: `${API_PLEXUS__URL}contentByCategory/426`,
      });

      if (response?.status === "SUCCESS") {
        setLoading(false);
        setDataPortofolio(response?.data);
      } else {
        setLoading(false);
        console.log("false");
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const fetchClient = async () => {
    setLoading(true);
    try {
      const response = await GlobalGet({
        url: `${API_PLEXUS__URL}contentByCategory/422`,
      });

      if (response?.status === "SUCCESS") {
        setLoading(false);
        setDataClient(response?.data);
      } else {
        setLoading(false);
        console.log("false");
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const fetchAbout = async () => {
    setLoading(true);
    try {
      const response = await GlobalGet({
        url: `${API_PLEXUS__URL}content/260`,
      });

      if (response?.status === "SUCCESS") {
        setLoading(false);
        setDataAboutUs(response?.data);
      } else {
        setLoading(false);
        console.log("false");
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const fetchTeam = async () => {
    setLoading(true);
    try {
      const response = await GlobalGet({
        url: `${API_PLEXUS__URL}contentByCategory/427`,
      });

      if (response?.status === "SUCCESS") {
        setLoading(false);
        setDataTeam(response?.data);
      } else {
        setLoading(false);
        console.log("false");
      }
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPortofolio();
    fetchClient();
    fetchAbout();
    fetchTeam();
  }, []);
  return { dataPortofolio, dataClient, dataAboutUs, dataTeam };
};

export default Services;

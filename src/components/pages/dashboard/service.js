import { GlobalGet, GlobalPost } from "../../../helpers/fetcher";
import { useState, useEffect } from "react";
import Environtment from "../../../constant/environtment.json";
const Services = () => {
  const { API_PLEXUS__URL } = Environtment;
  const [dataPortofolio, setDataPortofolio] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPortofolio = async () => {
    setLoading(true);
    try {
      const response = await GlobalGet({
        url: `${API_PLEXUS__URL}contentByCategory/426`,
      });
      if (response?.status === 200) {
        setLoading(false);
        setDataPortofolio(response?.data?.post);
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPortofolio();
  }, []);
  console.log("data porto", dataPortofolio);
  return { dataPortofolio };
};

export default Services;

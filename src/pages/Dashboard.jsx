import { useEffect } from "react";
import api from "../services/axiosInstance";

function Dashboard() {
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await api.get("/user");

    console.log(res.data);
  };

  return <div>Dashboard</div>;
}

export default Dashboard;

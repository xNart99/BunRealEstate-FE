import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import { mockRefreshToken } from "../../mocksapi/mockRefreshToken.jsx";
import Sidebar from "../../components/DashBoard/Sidebar.jsx";

const DashBoardLayout = () => {
  const { setAccessToken } = useContext(AuthContext);

  useEffect(() => {
    const refresh = async () => {
      try {
        const res = mockRefreshToken();
        if (res.status !== "success") throw new Error();
        setAccessToken(res.data.accessToken);
      } catch {
        setAccessToken(null);
      }
    };

    refresh;
  }, []);
  return (
    <div className="flex min-h-screen w-full bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex-1 bg-gray-50 dark:bg-gray-950 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;

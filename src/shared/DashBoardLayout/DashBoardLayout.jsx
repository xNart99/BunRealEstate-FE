import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import { mockRefreshToken } from "../../mocksapi/mockRefreshToken.jsx";

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
    <div>
      <h1>DashBoardLayout</h1>
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;

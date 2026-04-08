import { useRoutes, Navigate, useLocation } from "react-router-dom";
import { PATH } from "./path";
import { useContext } from "react";
import AuthLayout from "../shared/AuthLayout/AuthLayout";
import Login from "../components/Login/Login";
import DashBoardLayout from "../shared/DashBoardLayout/DashBoardLayout";
import DashBoard from "../components/DashBoard/DashBoard";
import { AuthContext } from "../context/AuthContext.jsx";

function Routes() {
  const { accessToken } = useContext(AuthContext);
  const location = useLocation();

  const routing = useRoutes([
    {
      path: PATH.ROOT,
      element: accessToken ? (
        <DashBoardLayout />
      ) : (
        <Navigate to={PATH.LOGIN} state={{ from: location }} />
      ),
      children: [
        {
          path: PATH.DASHBOARD,
          element: <DashBoard />,
        },
      ],
    },
    {
      path: PATH.ROOT,
      element: <AuthLayout />,
      children: [
        {
          path: PATH.LOGIN,
          element: accessToken ? (
            <Navigate to={PATH.DASHBOARD} state={{ from: location }} />
          ) : (
            <Login />
          ),
        },
      ],
    },
  ]);

  // if (loading) return <div>Loading..</div>;
  return routing;
}

export default Routes;

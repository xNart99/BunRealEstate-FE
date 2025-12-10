import { useRoutes, Navigate, useLocation } from "react-router-dom";
import { PATH } from "./path";
import AuthLayout from "../shared/AuthLayout/AuthLayout";
import Login from "../components/Login/Login";
import DashBoardLayout from "../shared/DashBoardLayout/DashBoardLayout";
import DashBoard from "../components/DashBoard/DashBoard";
import isAuthenticate from "../utils/functionCommon";

function Routes() {
  const location = useLocation();
  return useRoutes([
    {
      path: PATH.ROOT,
      element: isAuthenticate() ? (
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
          element: isAuthenticate() ? (
            <Navigate to={PATH.DASHBOARD} state={{ from: location }} />
          ) : (
            <Login />
          ),
        },
      ],
    },
  ]);
}

export default Routes;

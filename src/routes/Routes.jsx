import { useRoutes } from "react-router-dom";
import { PATH } from "./path";
import AuthLayout from "../shared/AuthLayout/AuthLayout";
import Login from "../components/Login/Login";
import DashBoardLayout from "../shared/DashBoardLayout/DashBoardLayout";
import DashBoard from "../components/DashBoard/DashBoard";

function Routes() {
  return useRoutes([
    {
      path: PATH.ROOT,
      element: <DashBoardLayout />,
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
          element: <Login />,
        },
      ],
    },
  ]);
}

export default Routes;

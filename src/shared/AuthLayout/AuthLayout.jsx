import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="h-screen pt-[25vh]">
      <Outlet />
    </div>
  );
}

export default AuthLayout;

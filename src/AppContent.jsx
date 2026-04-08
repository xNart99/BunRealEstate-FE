import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { mockRefreshToken } from "./mocksapi/mockRefreshToken";
import Routes from "./routes/Routes";

function AppContent() {
  const { setAccessToken } = useContext(AuthContext);

  useEffect(() => {
    const refresh = async () => {
      try {
        const res = mockRefreshToken();

        console.log("Reloading:", res);

        if (res.status !== "success") throw new Error();

        setAccessToken(res.data.accessToken);
      } catch {
        setAccessToken(null);
      }
    };

    refresh();
  }, []);

  return <Routes />;
}

export default AppContent;

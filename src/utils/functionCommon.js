import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function useAuthenticate() {
  const { accessToken } = useContext(AuthContext);

  return !!accessToken;
}

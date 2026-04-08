import { useState } from "react";

import { AuthContext } from "../../context/AuthContext.jsx";

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

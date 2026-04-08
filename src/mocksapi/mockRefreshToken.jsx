import { getCookie } from "../utils/cookie";

export const mockRefreshToken = () => {
  const refreshToken = getCookie("refreshToken");

  if (!refreshToken) {
    return {
      status: 401,
      message: "No refresh token",
    };
  }

  if (refreshToken !== "REFRESH_TOKEN_ABC") {
    return {
      status: 403,
      message: "Invalid refresh token",
    };
  }

  return {
    status: "success",
    data: {
      accessToken: "ACCESS_TOKEN_NEW_" + Date.now(),
    },
  };
};

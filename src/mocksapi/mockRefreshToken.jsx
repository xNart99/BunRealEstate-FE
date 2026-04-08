import { getCookie } from "../utils/cookie";
import { generateToken } from "../utils/generateToken";

export const mockRefreshToken = () => {
  const refreshToken = getCookie("refreshToken");

  if (!refreshToken) {
    return {
      status: 401,
      message: "No refresh token",
    };
  }

  if (refreshToken !== "rftoken1235151515") {
    return {
      status: 403,
      message: "Invalid refresh token",
    };
  }

  return {
    status: "success",
    data: {
      accessToken: "ACCESS_TOKEN_NEW_" + generateToken(16),
    },
  };
};

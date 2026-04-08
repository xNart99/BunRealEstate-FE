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

  if (!refreshToken.startsWith("refresh_token_")) {
    return {
      status: 403,
      message: "Invalid refresh token",
    };
  }

  const newAccessToken = "access_token_" + generateToken(16);
  const newRefreshToken = "refresh_token_" + generateToken(16);

  return {
    status: "success",
    data: {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    },
  };
};

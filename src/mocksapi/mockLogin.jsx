import { generateToken } from "../utils/generateToken";

export const mockLogin = (data) => {
  const username = "admin@bunrealestate.com";
  const password = "123123";
  const respond = {
    status: "success",
    message: "Login successful",
    data: {
      id: "user_123",
      email: "admin@bunrealstate.com",
      fullname: "Jone Tran",
      role: "admin",
    },
    token: {
      accessToken: "access_token_" + generateToken(16),
      refreshToken: "refresh_token_" + generateToken(16),
      expriesIn: 3600,
    },
  };

  if (data.username !== username || data.password !== password) {
    return {
      status: "error",
      message: "Incorrect username/password",
    };
  }

  return respond;
};

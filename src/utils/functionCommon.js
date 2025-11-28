import { getCookie, KEY } from "./cookie";

export function isAuthenticate() {
  const accessToken = getCookie(KEY.TOKEN);
  return !!accessToken && accessToken != null;
}

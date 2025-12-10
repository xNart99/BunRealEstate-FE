import { getCookie, KEY } from "./cookie";

export default function isAuthenticate() {
  const accessToken = getCookie(KEY.TOKEN);

  return !!accessToken && accessToken != null;
}

import Cookies from "js-cookie";

export function getCookie(key) {
  return Cookies.getCookie(key);
}

export function setCookie(key, value) {
  return Cookies.setCookie(key, value);
}

export function removeCookie(key) {
  return Cookies.removeCookie(key);
}

export const KEY = {
  TOKEN: "TOKEN",
};

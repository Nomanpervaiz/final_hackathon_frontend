import Cookies from "js-cookie";

const dev = "http://localhost:7777/";
const prod = "https://final-hackathon-backend-teal.vercel.app/";
const BASE_URL = prod;

export const AppRoutes = {
  login: BASE_URL + "api/auth/login",
  register: BASE_URL + "api/auth/register",
};

export const getToken = () => {
  let token = Cookies.get("user");
  return token;
};

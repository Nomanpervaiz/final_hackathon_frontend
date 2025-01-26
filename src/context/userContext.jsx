import axios from "axios";
import Cookies from "js-cookie";
import { AppRoutes } from "../constant/ApiRoutes";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log("user in context user ==> ", user);

  useEffect(() => {
    const savedUser = Cookies.get("user");
    console.log(savedUser);

    if (savedUser) {
      try {
        setUser({});
        getSingleUserInfo(savedUser);
      } catch (error) {
        console.error("Error parsing user cookie:", error);
        Cookies.remove("user");
      }
    }
  }, []);

  const getSingleUserInfo = async (token) => {
    if (token) {
      axios
        .get(AppRoutes.login, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          setUser(res?.data?.data);
        })
        .catch((err) => {
          console.log("Error in getting user info:", err);
        });
    }
  };


  const login = (userData, token) => {
    setUser(userData);
    Cookies.set("user", token, { expires: 7 });
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, getSingleUserInfo, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

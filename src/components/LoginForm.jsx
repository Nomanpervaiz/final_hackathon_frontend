import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppRoutes } from "../constant/ApiRoutes";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { EyeIcon, EyeOff } from "lucide-react";
import { message } from "antd";

function LoginForm() {
  const { login, getSingleUserInfo } = useContext(UserContext);
  let [loading, setLoading] = useState(false);
  let [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLoginForm = async ({cnic , email , password}) => {
    try {
      setLoading(true)
      const response = await axios.post(
        AppRoutes.login,
        {cnic, email, password},
        {
          headers: {
            "Content-Type": "application/json",

          },
        }
      );
      console.log(response);
      
      const token = response?.data?.data?.token;
      const user = response?.data?.data?.user;
      
      if (!token) {
        throw new Error("Invalid token received. Please try again.");
      }
      if (user) {
        user._id = user.id;
      }
     login(user,token);
      
      reset();
      message.success("User login successfully!")
      setLoading(false)
    } catch (error) {
        setLoading(false)
        console.error(
            "Error in login:",
            error.response ? error.response.data : error.message
        );
        message.error(error?.response ? error?.response.data : error?.message || "something went wrong, Try Again")
    }
    setLoading(false)
  };

  const handleVisibility = ()=>{
    setVisible(!visible)
  }

  return (
    <form
      onSubmit={handleSubmit(handleLoginForm)}
      className="w-full flex flex-col items-center gap-6 "
    >
      <div className="w-full sm:w-3/4 lg:w-3/5">
        <input
          {...register("cnic", {
            required: "CNIC is required",
            pattern: {
              value: 13,
              message: "Invalid CNIC",
            },
          })}
          type="text"
          className="border border-gray-300 outline-none shadow-md w-full p-3 rounded-sm"
          placeholder="CNIC"
        />
        {errors?.cnic && (
          <p className="text-red-500 text-sm mt-1">{errors?.cnic?.message}</p>
        )}
      </div>
      <div className="w-full sm:w-3/4 lg:w-3/5">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          type="email"
          className="border border-gray-300 outline-none shadow-md w-full p-3 rounded-sm"
          placeholder="Email"
        />
        {errors?.email && (
          <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>
        )}
      </div>

      <div className="w-full sm:w-3/4 relative lg:w-3/5">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type={visible ? "text" :  "password"}
          className="border border-gray-300 outline-none shadow-md w-full p-3 rounded-sm"
          placeholder="Password"
        />
        {
          visible ? 
          <EyeIcon onClick={handleVisibility} className="cursor-pointer absolute top-3 right-4"/>
          :
          <EyeOff onClick={handleVisibility} className="cursor-pointer absolute top-3 right-4"/>
        }
        {errors?.password && (
          <p className="text-red-500 text-sm mt-1">{errors?.password?.message}</p>
        )}
      </div>

      <button
      disabled={loading}
       className="border cursor-pointer bg-blue-600 hover:bg-blue-700 shadow-md font-semibold h-12 rounded-sm w-3/4 sm:w-1/2 lg:w-1/4 text-white">
       {loading ? "Loading..." : "SIGN IN" } 
      </button>
    </form>
  );
}

export default LoginForm;

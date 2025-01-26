import { useForm } from "react-hook-form";
import { EyeIcon, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import axios from "axios";
import { AppRoutes } from "../constant/ApiRoutes";
import { UserContext } from "../context/userContext";
import { message } from "antd";

function RegisterForm() {
  let [visible, setVisible] = useState(false);
  let [loading, setLoading] = useState(false);
  const user = useContext(UserContext);
  const { setUser } = user;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSignUpForm = async ({cnic , name , email,password}) => {
    try {
      console.log("registern form ==>", cnic , name , email,password);
      setLoading(true);
      const response = await axios.post(AppRoutes.register, {
        cnic,
        name,
        email,
        password,
      });
      setLoading(false);
      console.log(response?.data);
      const token = response?.data?.data?.token;
      const user = response?.data?.data?.user;
      console.log("user=>",user,"token=>",token);
      message.success("User register successfully !")
      reset();
    } catch (error) {
        setLoading(false);
        console.log("error in register user", error);
         message.error(error?.response ? error?.response.data : error?.message)
    }
  };

  const handleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignUpForm)}
      className=" w-full xl:px-10 space-y-4 text-center"
    >
      <input
        {...register("cnic", {
          required: "Cnic is required",
          minLength: {
            value: 13,
            message: "CNIC should be at least 13 characters",
          },
        })}
        type="text"
        className="border border-gray-300 outline-none shadow-md w-full p-3 rounded-sm"
        placeholder="CNIC"
      />
      {errors.cnic && (
        <p className="text-red-500 text-left text-sm mt-1">
          {errors.cnic.message}
        </p>
      )}
      <input
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name should be at least 3 characters",
          },
        })}
        type="text"
        className="border border-gray-300 outline-none shadow-md w-full p-3 rounded-sm"
        placeholder="Name"
      />
      {errors.name && (
        <p className="text-red-500 text-left text-sm mt-1">
          {errors.username.message}
        </p>
      )}

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
      {errors.email && (
        <p className="text-red-500 text-left text-sm mt-1">
          {errors.email.message}
        </p>
      )}

      <div className="relative">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be at least 6 characters",
            },
          })}
          className="border border-gray-300 outline-none  shadow-md w-full p-3 rounded-sm"
          placeholder="Password"
          type={visible ? "text" : "password"}
        />
        {visible ? (
          <EyeIcon
            onClick={handleVisibility}
            className="cursor-pointer absolute top-3 right-4"
          />
        ) : (
          <EyeOff
            onClick={handleVisibility}
            className="cursor-pointer absolute top-3 right-4"
          />
        )}
      </div>
      {errors.password && (
        <p className="text-red-500 text-left text-sm ">
          {errors.password.message}
        </p>
      )}
      <button
        disabled={loading}
        className=" bg-blue-600 cursor-pointer hover:bg-blue-700 shadow-md font-semibold h-12 rounded-sm w-3/4 sm:w-1/2 lg:w-1/4 text-white"
      >
        {loading ? "Loading..." : "SIGN UP"}
      </button>
    </form>
  );
}

export default RegisterForm;

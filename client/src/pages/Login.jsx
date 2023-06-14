import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Login = () => {
  const navigate = useNavigate();
  const [changePassword, setChangePassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const respose = await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (respose.ok) {
      navigate("/");
    } else {
      alert("\nWrong credentials entered!");
    }
  };
  const passwordViewHandler = () => {
    setChangePassword(!changePassword);
  };
  return (
    <div className="w-full h-[80vh] contOne relative flex justify-center items-center">
      <div className=" w-[90%] max-w-[500px] px-15 py-20 formCont dark:bg-slate-900 flex justify-center flex-col items-center gap-5">
        <h1 className="text-[40px] dark:text-[#ffffff] text-[#3d3d3d] ">
          Log In
        </h1>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-5 ">
            <div className=" rounded flex items-center gap-2">
              <PersonIcon />
              <input
                required
                value={username}
                onChange={usernameHandler}
                name="Username"
                type="text"
                placeholder="Enter Your Name"
                className="bg-gray-50 border dark:text-[#ffffff] dark:bg-neutral-600 dark:border-black border-gray-300 text-gray-900 text-sm rounded focus:ring-[#4649ff] focus:border-[#4649ff] dark:focus:border-[#ffffff] outline-none block w-full p-3"
              />
            </div>
            <div className=" rounded flex items-center gap-2">
              <LockIcon />
              <input
                required
                value={password}
                onChange={passwordHandler}
                name="Password"
                type={changePassword ? "text" : "password"}
                placeholder="Enter Your Name"
                className="bg-gray-50 border dark:text-[#ffffff] dark:bg-neutral-600 dark:border-black border-gray-300 text-gray-900 text-sm rounded focus:ring-[#4649ff] focus:border-[#4649ff] dark:focus:border-[#ffffff] outline-none block w-full p-3"
              />
              <span onClick={passwordViewHandler} className="cursor-pointer">
                {changePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#6469ff] text-[#fff] rounded-md px-3 py-4"
            >
              Log In
            </button>
          </div>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;

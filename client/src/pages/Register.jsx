import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username, " ", password);

    const response = await fetch("http://localhost:8080/api/v1/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert("Successfully registered!");
      navigate("/login");
    }
    if (response.ok === false) {
      alert("You need to fill all fields!");
    }
  };
  return (
    <div className="w-full h-[80vh] contOne  relative flex justify-center  items-center">
      <div className=" w-[90%] max-w-[500px] px-15 py-20 bg-[#ffffff] rounded-2xl dark:bg-slate-900 flex justify-center flex-col items-center gap-5">
        <h1 className="text-[40px] dark:text-[#ffffff] text-[#000] ">
          Register
        </h1>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-5 ">
            <div className=" rounded flex items-center gap-2">
              <PersonIcon />
              <input
                required
                onChange={usernameHandler}
                value={username}
                name="Username"
                type="text"
                placeholder="Enter Your Username"
                className="bg-gray-50 border dark:text-[#ffffff] dark:bg-neutral-600 dark:border-black border-gray-300 text-gray-900 text-sm rounded focus:ring-[#4649ff] focus:border-[#4649ff] dark:focus:border-[#ffffff] outline-none block w-full p-3"
              />
              {/* <input
                required
                name="Username"
                type="text"
                placeholder="Enter Your Name"
                className="bg-gray-50 border dark:text-[#ffffff] dark:bg-neutral-600 dark:border-black border-gray-300 text-gray-900 text-sm rounded focus:ring-[#4649ff] focus:border-[#4649ff] dark:focus:border-[#ffffff] outline-none block w-full p-3"
              /> */}
            </div>
            <div className=" rounded flex items-center gap-2">
              <LockIcon />
              <input
                // required
                onChange={passwordHandler}
                value={password}
                name="Password"
                type="password"
                placeholder="Enter Your Password"
                className="bg-gray-50 border dark:text-[#ffffff] dark:bg-neutral-600 dark:border-black border-gray-300 text-gray-900 text-sm rounded focus:ring-[#4649ff] focus:border-[#4649ff] dark:focus:border-[#ffffff] outline-none block w-full p-3"
              />
            </div>
            <button
              type="submit"
              className="bg-[#6469ff] text-[#fff] rounded-md px-2 py-2"
            >
              Register Now
            </button>
          </div>
        </form>
        <Link
          to="/login"
          className="bg-[#4649ff] text-[#fff] rounded-md px-3 py-4"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Register;

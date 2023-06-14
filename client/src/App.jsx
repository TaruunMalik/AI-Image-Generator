import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import IndividualPost from "./pages/IndividualPost";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./App.css";
function App() {
  const [toggle, setToggle] = useState(true);
  const [curUser, setCurUser] = useState("dfd");
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    fetch("http://localhost:8080/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setCurUser(userInfo.username);
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <header className="w-full flex dark:bg-[#77726e] justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:border-b-[#000000]">
        <Link to="/">
          <img src={logo} className="w-28 object-contain" alt="lunaLogo" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] dark:bg-[#413341] text-white px-4 py-2 upper-text rounded-md"
        >
          Create New
        </Link>

        <section className="flex items-center gap-5">
          <Link
            to="/login"
            className="font-inter font-medium bg-[#6469ff] dark:bg-[#59125b] text-white px-4 py-2 upper-text rounded-md"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="font-inter font-medium bg-[#6469ff] dark:bg-[#59125b] text-white px-4 py-2 upper-text rounded-md"
          >
            Register
          </Link>
          {theme !== "light" ? (
            <LightModeIcon
              className="hover:cursor-pointer theme-btn"
              onClick={handleTheme}
            />
          ) : (
            <NightlightIcon
              className="hover:cursor-pointer theme-btn"
              onClick={handleTheme}
            />
          )}
        </section>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] dark:bg-[#121212] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/single/:_id" element={<IndividualPost />} />
          <Route path="/create-post" element={<CreatePost theme={theme} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

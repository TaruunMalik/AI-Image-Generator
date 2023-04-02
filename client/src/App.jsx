import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
function App() {
  const [toggle, setToggle] = useState(true);
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

  return (
    <BrowserRouter>
      <header className="w-full flex dark:bg-[#77726e] justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:border-b-[#000000]">
        <Link to="/">
          <img src={logo} className="w-28 object-contain" alt="lunaLogo" />
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] dark:bg-[#59125b] text-white px-4 py-2 rounded-md"
        >
          Create New
        </Link>
        {theme !== "light" ? (
          <LightModeIcon
            className="hover:cursor-pointer"
            onClick={handleTheme}
          />
        ) : (
          <NightlightIcon
            className="hover:cursor-pointer"
            onClick={handleTheme}
          />
        )}
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] dark:bg-[#121212] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/create-post" element={<CreatePost theme={theme} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      document.body.style.backgroundColor = "#1e293b"; // Dark mode background
    } else {
      root.classList.remove("dark");
      document.body.style.backgroundColor = "#f9fafb"; // Light mode background
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative">
      <img
        src={theme === "light" ? LightButton : DarkButton}
        alt={`${theme === "light" ? "Enable dark mode" : "Enable light mode"}`}
        onClick={toggleTheme}
        className="w-12 cursor-pointer drop-shadow transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;

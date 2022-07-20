import React from "react";
import "./navigation.css";
import { useTheme } from "../../context/ThemeContext";

export default function Navigation() {
  // clock Parameters

  let openNav = () => {
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.height = "100%";
  };
  let closeNav = () => {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("nav").style.height = "0%";
  };

  let { toggleTheme, theme } = useTheme();

  return (
    <>
      <button
        onClick={openNav}
        href="#"
        className={theme === "dark" ? "openBtnDark" : "openBtnLight"}
        data-toggle="tooltip"
        data-placement="top"
        title="Menu"
      >
        <i className="fa fa-bars"></i>
      </button>
      {/* overlay Start */}
      <div
        id="nav"
        className={
          "d-flex align-items-center justify-content-center flex-column " +
          (theme === "dark" ? "overlay-dark" : "overlay-light")
        }
      >
        <button onClick={closeNav} href="#" className={theme==="dark"?"closeBtnDark":"closeBtnLight"}>
          <i className="fa fa-times"></i>
        </button>
        {/* Change Theme START */}
        <button
          onClick={toggleTheme}
          id={theme === "dark" ? "changeThemeDark" : "changeThemeLight"}
        >
          {theme === "dark" ? "Dark Theme" : "Light Theme"}
        </button>
        {/* Change Theme START */}
        {/* <Clock /> */}
        <div
          id={theme === "dark" ? "navbar-dark" : "navbar-light"}
          className="d-flex align-items-center justify-content-center text-center w-100 h-100"
        >
          <ul>
            <li>
              <a onClick={closeNav} href="#home">
                <i className="fa-solid fa-house"></i>Home
              </a>
            </li>
            <li>
              <a
                onClick={closeNav}
                href="#aboutMeDark"
              >
                <i className="fa-solid fa-id-card-clip"></i>About Me
              </a>
            </li>
            <li>
              <a
                onClick={closeNav}
                href="#myProjectDark"
              >
                <i className="fa-solid fa-laptop-code"></i>My Project
              </a>
            </li>
            <li>
              <a
                onClick={closeNav}
                href={
                  theme === "dark" ? "#technologiesDark" : "#technologiesLight"
                }
              >
                <i className="fa-solid fa-cubes"></i>Technologies
              </a>
            </li>
            <li>
              <a onClick={closeNav} href="#contact">
                <i className="fa-solid fa-comment-sms"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* overlay End */}
    </>
  );
}

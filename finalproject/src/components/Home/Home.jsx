import React, { useState } from "react";
import alertify from "alertifyjs";

import "./home.css";
import "./register.css";
import "./login.css";

import { useTheme } from "../../context/ThemeContext";

import sliderFirstLight from "../../images/home/slider1Light.jpg";
import sliderFirstDark from "../../images/home/slider1Dark.jpg";
import sliderSecond from "../../images/home/chess.jpg";

const Home = () => {
  
  let { theme } = useTheme();

  // Register State START
  let [registerName, setRegisterName] = useState("");
  let [registerSurname, setRegisterSurname] = useState("");
  let [registerEmail, setRegisterEmail] = useState("");
  let [registerYearOfBirt, setRegisterYearOfBirt] = useState("");
  let [registerPassword, setRegisterPassword] = useState("");
  let [registerRePassword, setRegisterRePassword] = useState("");
  // Register State End

  // Login State Start
  let [loginEmail, setLoginEmail] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  // Login State End

  let [userLogin, setUserLogin] = useState({
    userEmail: "userEmail@gmail.com",
    userPassword: "userPassword",
  });

  let emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?/-_\!#+$-%&/{}[\]*])(?=.*[a-zA-Z]).{8,12}$/;

  let exitBtnFonk = () => {
    if (theme === "dark") {
      document.querySelector(".validationButtonDark").style.display = "block";
      document.querySelector("#exitButtonDark").style.display = "none";
      document.querySelector("#exitButtonDark").style.zIndex = "0";
    } else {
      document.querySelector(".validationButtonLight").style.display = "block";
      document.querySelector("#exitButtonLight").style.display = "none";
    }
    alertify.success("Successfully logged out. Have a nice day.");
  };
  let registerSubmitFonk = (e) => {
    if (
      registerName.length === 0 ||
      registerEmail.length === 0 ||
      registerSurname.length === 0 ||
      registerPassword.length === 0 ||
      registerRePassword.length === 0 ||
      registerYearOfBirt.length === 0
    ) {
      alertify.error("Please fill in all the specified fields.", 3);
    } else if (!emailValidation.test(registerEmail)) {
      alertify.error(
        "Please enter an email corresponding to the example. (example@gmail.com)"
      );
    } else if (registerPassword !== registerRePassword) {
      alertify.error("Password and rePassword must be the same", 2);
    } else if (!passwordValidation.test(registerPassword)) {
      alertify.error(
        `Your password should contain the following.
          1 capital letter,
          1 lowercase letter,
          minimum 8 and maximum 12 characters,
          Must contain special characters such as (?-_%&)`,5
      );
    } else {
      alertify.success("Registration Successful. You can login.", 2);
      if (theme === "dark") {
        document.querySelector(".registerModalDark").style.width = "0%";
        document.querySelector(".registerModalDark").style.height = "0%";
        document.querySelector(".registerModalDark").style.zIndex = "0";
      } else {
        document.querySelector(".registerModalLight").style.width = "0%";
        document.querySelector(".registerModalLight").style.height = "0%";
        document.querySelector(".registerModalLight").style.zIndex = "0";
      }
      if (theme === "dark") {
        document.querySelector(".loginModalDark").style.width = "100vw";
        document.querySelector(".loginModalDark").style.height = "100vh";
        document.querySelector(".loginModalDark").style.zIndex = "3";
      } else {
        document.querySelector(".loginModalLight").style.width = "100vw";
        document.querySelector(".loginModalLight").style.height = "100vh";
        document.querySelector(".loginModalLight").style.zIndex = "3";
      }
      setUserLogin({
        userEmail: registerEmail,
        userPassword: registerPassword,
      });
    }
    e.preventDefault();
  };
  let loginSubmitFonk = (e) => {
    if (loginEmail === userLogin.userEmail && loginPassword === userLogin.userPassword) {
      
      alertify.success("Login successful", 3);
      if (theme === "dark") {
        document.querySelector(".loginModalDark").style.width = "0%";
        document.querySelector(".loginModalDark").style.height = "0%";
        document.querySelector(".loginModalDark").style.zIndex = "0";
        document.querySelector(".validationButtonDark").style.display = "none";
        document.querySelector("#exitButtonDark").style.display = "block";
      } 
      else {
        document.querySelector(".loginModalLight").style.width = "0%";
        document.querySelector(".loginModalLight").style.height = "0%";
        document.querySelector(".loginModalLight").style.zIndex = "0";
        document.querySelector(".validationButtonLight").style.display = "none";
        document.querySelector("#exitButtonLight").style.display = "block";
      }
      setLoginEmail("");
      setLoginPassword("");
    } else {
      alertify.error("Wrong login. Please check your information", 3);
    }
    e.preventDefault();
  };
  let openRegister = () => {
    if (theme === "dark") {
      document.querySelector(".registerModalDark").style.width = "100vw";
      document.querySelector(".registerModalDark").style.height = "100vh";
      document.querySelector(".registerModalDark").style.zIndex = "3";
    } 
    else {
      document.querySelector(".registerModalLight").style.width = "100vw";
      document.querySelector(".registerModalLight").style.height = "100vh";
      document.querySelector(".registerModalLight").style.zIndex = "3";
    }
  };
  let closeRegister = () => {
    if (theme === "dark") {
      document.querySelector(".registerModalDark").style.width = "0%";
      document.querySelector(".registerModalDark").style.height = "0%";
      document.querySelector(".registerModalDark").style.zIndex = "0";
    } 
    else {
      document.querySelector(".registerModalLight").style.width = "0%";
      document.querySelector(".registerModalLight").style.height = "0%";
      document.querySelector(".registerModalLight").style.zIndex = "0";
    }
  };
  let openLogin = () => {
    if (theme === "dark") {
      document.querySelector(".loginModalDark").style.width = "100vw";
      document.querySelector(".loginModalDark").style.height = "100vh";
      document.querySelector(".loginModalDark").style.zIndex = "3";
    } else {
      document.querySelector(".loginModalLight").style.width = "100vw";
      document.querySelector(".loginModalLight").style.height = "100vh";
      document.querySelector(".loginModalLight").style.zIndex = "3";
    }
  };
  let closeLogin = () => {
    if (theme === "dark") {
      document.querySelector(".loginModalDark").style.width = "0%";
      document.querySelector(".loginModalDark").style.height = "0%";
      document.querySelector(".loginModalDark").style.zIndex = "0";
    } 
    else {
      document.querySelector(".loginModalLight").style.width = "0%";
      document.querySelector(".loginModalLight").style.height = "0%";
      document.querySelector(".loginModalLight").style.zIndex = "0";
    }
  };

  return (
    <>
      <section id="home">
        {/* Validation Area START */}

        <div className={theme === "dark" ? "validationButtonDark" : "validationButtonLight"}>
          <button onClick={openRegister} className={ theme === "dark" ? "registerDarkPage" : "registerLightPage"}>
            Register
          </button>
          <button onClick={openLogin} className={theme === "dark" ? "loginDarkPage" : "loginLightPage"}>
            Login
          </button>
        </div>

        <div onClick={exitBtnFonk} id={theme === "dark" ? "exitButtonDark" : "exitButtonLight"}>
          <button>Exit</button>
        </div>


        {/* Register Modal START */}
        <div className={theme === "dark" ? "registerModalDark" : "registerModalLight"}>
          <button onClick={closeRegister} className="closeRegisterModal">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className={"d-flex align-items-center justify-content-center flex-column " +(theme === "dark" ? "registerDarkForm" : "registerLightForm")}>
            <h2 className="text-white mb-5">Create an Account</h2>
            <form onSubmit={registerSubmitFonk} className="d-flex align-items-center justify-content-center flex-column" >
              <div className="w-100 d-flex align-items-center justify-content-center flex-row mb-2">
                <i className="fa-solid fa-user"></i>
                <div style={{ padding: "0px 10px" }} className="d-flex align-items-center justify-content-center" >
                  <input className="m-0 me-3" type="text" placeholder="Your Name" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
                  <input className="m-0" type="text" placeholder="Your Surname" value={registerSurname} onChange={(e) => setRegisterSurname(e.target.value)} />
                </div>
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-at"></i>
                <input onChange={(e) => setRegisterEmail(e.target.value)} value={registerEmail} type="email" placeholder="Your E-mail" />
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-cake-candles"></i>
                <input onChange={(e) => setRegisterYearOfBirt(e.target.value)} value={registerYearOfBirt} type="number" placeholder="Year Of Birth" />
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-unlock-keyhole"></i>
                <input onChange={(e) => setRegisterPassword(e.target.value)} value={registerPassword} type="password" placeholder="Password"
                />
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-repeat"></i>
                <input onChange={(e) => setRegisterRePassword(e.target.value)} value={registerRePassword} type="password" placeholder="Password Repeat" />
              </div>

              <button type="submit">Create Account</button>
            </form>
          </div>
        </div>
        {/* Register Modal END */}


        {/* Login Modal START */}
        <div className={theme === "dark" ? "loginModalDark" : "loginModalLight"} >
          <button onClick={closeLogin} className="closeLoginModal">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className={ "d-flex align-items-center justify-content-center flex-column " + (theme === "dark" ? "loginDarkForm" : "loginLightForm") } >
            <h2 className="text-white mb-3">
              <b>LOGIN</b>
            </h2>
            <form onSubmit={loginSubmitFonk} className="d-flex align-items-center justify-content-center flex-column" >
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-at rounded-circle"></i>
                <input className="rounded-pill" type="email" placeholder="Your E-mail" onChange={(e) => setLoginEmail(e.target.value)} value={loginEmail}  />
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-unlock-keyhole rounded-circle"></i>
                <input className="rounded-pill" type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} value={loginPassword} />
              </div>
              <div id={theme === "dark" ? "loginDark" : "loginLight"}>
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com" >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.github.com" >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.google.com/account/about/" >
                  <i className="fa-brands fa-google"></i>
                </a>
              </div>

              <button type="submit" className="rounded-pill">
                Login
              </button>
            </form>
          </div>
        </div>
        {/* Login Modal END */}
        {/* Validation Area END */}


        {/* Carousel START */}
        <div id="carouselExampleDark" className="carousel carousel-dark slide w-100 h-100" data-bs-ride="carousel" >
          <div className="carousel-indicators m-0">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{ width: "30px", height: "20px", borderRadius: "50%" }} ></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" style={{ width: "30px", height: "20px", borderRadius: "50%" }} ></button>
          </div>
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100" data-bs-interval="100000" >
              <img src={theme === "dark" ? sliderFirstDark : sliderFirstLight} className=" w-100 h-100" alt="..." />
              <div className="carousel-caption d-flex align-items-center justify-content-center flex-column text-white h-100">
                <div id="carouselFirstPage" className="d-flex align-items-center justify-content-center flex-column h-100 w-100" >
                  <h1>
                    Hi There! <br /> Welcome To My Website. <br /> I'am{" "}
                    <span>Halil Can</span> <br /> and I'am{" "}
                    <span>Frontend Developer</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item h-100" data-bs-interval="100000">
              <img src={sliderSecond} className="d-block w-100 h-100" alt="..." />
              <div className="carousel-caption d-flex align-items-center justify-content-center flex-column text-white h-100 p-0">
                <div id="carouselSecondPage" className="d-flex align-items-center justify-content-center flex-column h-100 w-100 " >
                  <a id="chessLink" rel="noreferrer" target="_blank" href="https://lichess.org/@/hllcncngz" >
                    Play Chess With Me
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" >
            <span id="prevButton" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Previous" >
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span id="nextButton" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Next" >
              <i className="fa-solid fa-angle-right"></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Carousel END */}
      </section>
    </>
  );
};

export default Home;

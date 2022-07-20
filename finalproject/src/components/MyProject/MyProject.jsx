import React, { useState, useEffect } from "react";
import "./myProject.css";
import instagramImage from "../../images/myproject/instagram.jpg";
import reactImage from "../../images/myproject/reactImage2.jpg";
import weatherImage from "../../images/myproject/weather.jpg";
import "animate.css";
import WOW from "wowjs";
import { useTheme } from "../../context/ThemeContext";

const MyProject = () => {
  let { theme } = useTheme();
  const [getData, setGetData] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/hllcncngz")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setGetData(data))
      .catch((err) => console.log(err));
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <div id="myProjectDark">
        <div className="wow heading text-white d-flex align-items-center justify-content-center flex-column pt-5">
          <h3>MY PROJECTS</h3>
          <div className="headingBorder bg-white"></div>
        </div>
        <div className="container-fluid p-0 text-white d-flex align-items-center justify-content-center flex-column">
          {/* TopSide Start */}
          <div id="topSide" className="w-100">
            <div className="row w-100 g-0 d-flex align-items-center justify-content-center flex-row">
              <div className="wow projectContainer col-lg-3 col-md-5 col-sm-6 mx-auto">
                <img className="imageOverlay" src={reactImage} alt="react" />
                <div className={theme==="dark" ? "projectOverlay-1Dark":"projectOverlay-1Light"}>
                  <div className="projectLink">
                    <h3 className={theme==="dark"?"text-dark":"text-white"}>ReactJS Photo Search App </h3>
                    <div className={theme==="dark"?"headingBorder2 bg-dark":"headingBorder2 bg-white"}></div>
                    <a
                      href="https://github.com/hllcncngz/Fotograflar-Projesi"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Projeyi İncele"
                    >
                      <i className={"fa-solid fa-magnifying-glass " + (theme==="dark"?"text-dark":"text-white")}></i>
                    </a>
                    <div className={theme==="dark"?"headingBorder bg-dark":"headingBorder bg-white"}></div>
                  </div>
                </div>
              </div>
              <div className="wow projectContainer col-lg-3 col-md-5 col-sm-6 mx-auto">
                <img
                  className="imageOverlay"
                  src={instagramImage}
                  alt="Instagram clone"
                />
                <div className={theme==="dark" ? "projectOverlay-2Dark":"projectOverlay-2Light"}>
                  <div className="projectLink">
                    <h3 className={theme==="dark"?"text-dark":"text-white"}>Bootstrap Instagram Clone</h3>
                    <div className={theme==="dark"?"headingBorder2 bg-dark":"headingBorder2 bg-white"}></div>
                    <a
                      href="https://github.com/hllcncngz/Bootstrap-Patika--dev/tree/master/%C4%B1nstagram-bootstrap"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Projeyi İncele"
                    >
                      <i className={"fa-solid fa-magnifying-glass " + (theme==="dark"?"text-dark":"text-white")}></i>
                    </a>
                    <div className={theme==="dark"?"headingBorder bg-dark":"headingBorder bg-white"}></div>
                  </div>
                </div>
              </div>
              <div className="wow projectContainer col-lg-3 col-md-5 col-sm-6 mx-auto">
                <img
                  className="imageOverlay"
                  src={weatherImage}
                  alt="weather"
                />
                <div className={theme==="dark" ? "projectOverlay-3Dark":"projectOverlay-3Light"}>
                  <div className="projectLink">
                    <h3 className={theme==="dark"?"text-dark":"text-white"}>Weather App Js</h3>
                    <div className={theme==="dark"?"headingBorder2 bg-dark":"headingBorder2 bg-white"}></div>
                    <a
                      href="https://github.com/hllcncngz/Weather"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Projeyi İncele"
                    >
                      <i className={"fa-solid fa-magnifying-glass " + (theme==="dark"?"text-dark":"text-white")}></i>
                    </a>
                    <div className={theme==="dark"?"headingBorder bg-dark":"headingBorder bg-white"}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TopSide End */}
          {/* BottomSide Start */}
          <div id="bottomSide">
            <div className="row w-100">
              <div
                className={
                  "wow d-flex align-items-center justify-content-center flex-column col-md-4 " +
                  (theme === "dark" ? "githubCountDark" : "githubCountLight")
                }
              >
                <div className="githubCountIcon">
                  <i className="fa-solid fa-person-walking-arrow-loop-left text-white"></i>
                </div>
                <div className="githubCountValue my-3 ">
                  {getData.followers}
                </div>
                <div className="githubCountDescription">
                  Github<span>Followers</span>
                </div>
              </div>
              <div
                className={
                  "wow d-flex align-items-center justify-content-center flex-column col-md-4 " +
                  (theme === "dark" ? "githubCountDark" : "githubCountLight")
                }
              >
                <div className="githubCountIcon">
                  <i className="fa-solid fa-person-walking-arrow-right text-white"></i>
                </div>
                <div className="githubCountValue my-3 ">
                  {getData.following}
                </div>
                <div className="githubCountDescription">
                  Github<span>Following</span>
                </div>
              </div>
              <div
                className={
                  "wow d-flex align-items-center justify-content-center flex-column col-md-4 " +
                  (theme === "dark" ? "githubCountDark" : "githubCountLight")
                }
              >
                <div className="githubCountIcon">
                  <i className="fa-solid fa-folder-open text-white"></i>
                </div>
                <div className="githubCountValue my-3 ">
                  {getData.public_repos}
                </div>
                <div className="githubCountDescription">
                  Github<span>Public Repository</span>
                </div>
              </div>
            </div>
          </div>
          {/* BottomSide End */}
        </div>
      </div>
    </>
  );
};

export default MyProject;

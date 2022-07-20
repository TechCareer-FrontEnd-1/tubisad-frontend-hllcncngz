import React, { useEffect } from "react";
import "./backToTop.css";
const BackToTop = () => {
  let backToTopVisibility = () => {
    window.onscroll = function () {
      var pageOffset = document.documentElement.scrollTop || document.body.scrollTop
      let backToTopDOM = document.getElementById("backToTop");
      if (pageOffset >= 100){
        backToTopDOM.style.visibility= "visible";
      }
      else{
        backToTopDOM.style.visibility= "hidden";
      }
      console.log(pageOffset);
    };
  };
  useEffect(() => {
    backToTopVisibility();
  }, []);
  return (
    <>
      <a id="backToTop" href="#home" rel="noreferrer">
      <i className="fa-solid fa-angles-up" data-toggle="tooltip" data-placement="top" title="Back To Top"></i>
      </a>
    </>
  );
};

export default BackToTop;

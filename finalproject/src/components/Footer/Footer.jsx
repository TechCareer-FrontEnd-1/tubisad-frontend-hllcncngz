import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        {/* Google Map Start */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48288.74814491274!2d31.123758931711365!3d40.84889718142484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409da01b6536d421%3A0xe1d0a622568cf8d7!2zRMO8emNlLCBEw7x6Y2UgTWVya2V6L0TDvHpjZQ!5e0!3m2!1str!2str!4v1656703637606!5m2!1str!2str"
          width="100%"
          height="300px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
        {/* Google Map End */}
        <div id="footerAreaDark" className="w-100">
          <div className="container h-100 g-0 my-5">
            {/* Footer Icons Start */}
            <div
              id="footerDesc"
              className="text-white d-flex align-items-center justify-content-center flex-column my-5"
            >
              <h6 id="copyright">© 2022 Copyright : www.halilcancengiz.com</h6>
            </div>
            <ul
              id="social"
              className="d-flex align-items-center justify-content-center h-50 col-xs-3"
            >
              <li id="instagram">
                <a
                  href="https://www.instagram.com/hllcncngz"
                  target="_blank"
                  rel="noreferrer"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li id="twitter">
                <a
                  href="https://twitter.com/hllcncngz1"
                  target="_blank"
                  rel="noreferrer"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li id="github">
                <a
                  href="https://github.com/hllcncngz"
                  target="_blank"
                  rel="noreferrer"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Github"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li id="linkedin">
                <a
                  href="https://www.linkedin.com/in/halilcancengiz/"
                  target="_blank"
                  rel="noreferrer"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Linkedin"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
            {/* Footer Icons Start */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

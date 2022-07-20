import React from "react";
import "./contact.css";
import * as alertify from "alertifyjs";
const Contact = () => {
  
  let alertifyFonk = (e) => {
    let contactNameValue = document.getElementById("name");
    let contactEmailValue = document.getElementById("email");
    let contactSubjectValue = document.getElementById("subject");
    let contactMessageValue = document.getElementById("message");

    if (
      contactNameValue.value.trim().length === 0 ||
      contactEmailValue.value.trim().length === 0 ||
      contactSubjectValue.value.trim().length === 0 ||
      contactMessageValue.value.trim().length === 0
    ) {
      alertify.error("Please fill in all the specified fields.",3);
    } 
    else {
      contactNameValue.value = "";
      contactEmailValue.value = "";
      contactSubjectValue.value = "";
      contactMessageValue.value = "";
      alertify.success("Thanks for contacting me.",3);
    }
    e.preventDefault();
  };
  return (
    <>
      <div className="py-5" id="contact">
        <div className="wow heading d-flex align-items-center justify-content-center  flex-column">
          <h3 className="text-white">CONTACT ME</h3>
          <div className="headingBorder bg-white"></div>
        </div>
        <div className="container" id="contactContainer">
          {/* ContactForm Start */}
          <div id="contactDetails">
            <h3>Contact Details</h3>
            <p>
              By filling out the form, you can ask questions you want to ask me and you can contact me.
            </p>
            <div className="d-flex flex-row align-items-center mt-3">
              <i className="fa-solid fa-phone"></i>
              <span>Phone: +90 538 770 80 40</span>
            </div>
            <div className="d-flex flex-row align-items-center mt-2">
              <i className="fa-solid fa-envelope"></i>
              <span>Email: hllcncngz1@gmail.com</span>
            </div>
            <div className="d-flex flex-row align-items-center mt-2">
              <i className="fa-solid fa-location-dot"></i>
              <span>Adress: Düzce/Türkiye</span>
            </div>
          </div>
          {/* ContactForm End */}

          {/* contactDetails Start */}

          <form onSubmit={alertifyFonk} id="contactForm">
            <input id="name" type="text" placeholder="Your Name" />
            <input id="email" type="email" placeholder="Your Email" />
            <input id="subject" type="text" placeholder="Subject" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button type="submit">Submit</button>
          </form>

          {/* contactDetails End */}
        </div>
      </div>
    </>
  );
};

export default Contact;

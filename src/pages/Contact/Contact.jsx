import React from "react";
import ContactImg from "../../assets/Animation.gif";
// import ContactImg from "../../assets/contact-us.gif";

import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-gif">
          <img src={ContactImg} alt="Contact Img" />
          <div className="socials">
            <h1>fb</h1>
            <h1>fb</h1>
            <h1>fb</h1>
            <h1>fb</h1>
            <h1>fb</h1>
          </div>
        </div>
        <form>
          <h1 className="title text-center mb-4">Talk to Us</h1>
          <div className="form-group position-relative">
            <label htmlFor="formName" className="d-block">
              <i className="icon" data-feather="user"></i>
            </label>
            <input
              type="text"
              id="formName"
              className="form-control form-control-lg thick"
              placeholder="Name"
            />
          </div>

          <div className="form-group position-relative">
            <label htmlFor="formEmail" className="d-block">
              <i className="icon" data-feather="mail"></i>
            </label>
            <input
              type="email"
              id="formEmail"
              className="form-control form-control-lg thick"
              placeholder="E-mail"
            />
          </div>

          <div className="form-group message">
            <textarea
              id="formMessage"
              className="form-control form-control-lg   "
              rows="7"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="contact-btn ">
              Send message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

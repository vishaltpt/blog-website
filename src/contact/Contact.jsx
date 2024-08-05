import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Topbar from "../Topbar/Topbar";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const form = useRef();
  const [capVal, setCapVal] = useState(null);
  const [formFilled, setFormFilled] = useState(false);

  const handleInputChange = () => {
    const formData = new FormData(form.current);
    let isFormFilled = true;

    formData.forEach((value) => {
      if (!value) {
        isFormFilled = false;
      }
    });

    setFormFilled(isFormFilled);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formFilled) {
      alert("Please fill out all form fields.");
      return;
    }

    if (!capVal) {
      alert("Please verify the CAPTCHA.");
      return;
    }

    emailjs
      .sendForm(
        "service_sf2914q",
        "template_76yjvdg",
        form.current,
        "SCPP5Z272U1ybjMoO"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          // Clear the form and CAPTCHA after successful submission
          form.current.reset();
          setCapVal(null);
          setFormFilled(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <Topbar />
      <div className="contact-container">
        <div className="contact-form">
          <h1>Contact Form</h1>
          <form ref={form} onSubmit={sendEmail} onChange={handleInputChange}>
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Message</label>
            <textarea name="message" />
            <center><input type="submit" value="Send" className="nm" /></center>
          </form>
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey="6LeZ5n8pAAAAAN0vDcjHdQlvZrfZkapRYc7U_-qY"
              onChange={(val) => setCapVal(val)}
              disabled={!formFilled}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

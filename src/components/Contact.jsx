import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/mediaqueries.css";
import "../styles/contact.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const currentForm = form.current;

    // Trigger Bootstrap validation UI
    currentForm.classList.add("was-validated");

    // Prevent submission if form is invalid
    if (!currentForm.checkValidity()) {
      return;
    }

    // Proceed with EmailJS if form is valid
    emailjs
      .sendForm("service_p8vq12n", "template_3p78k54", currentForm, {
        publicKey: "YPQb2RRAMsFdV-3jm",
      })
      .then(
        () => {
          alert("SUCCESS!");
          currentForm.reset();
          currentForm.classList.remove("was-validated");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div id="contact">
        <div className="contact-content ">
          <h1 className="contact-title">
            {" "}
            Contact <span>Me</span>{" "}
          </h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.{" "}
          </span>
          <form
            className="contactForm needs-validation"
            ref={form}
            onSubmit={sendEmail}
            noValidate
          >
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Your Name"
                name="name"
                required
              />
              <div className="invalid-feedback">Add name</div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Your Email"
                name="email"
                required
              />
              <div className="invalid-feedback">Add a valid email.</div>
            </div>

            <div className="mb-4">
              <textarea
                className="form-control"
                placeholder="Leave a message here.."
                id="floatingTextarea"
                name="message"
                required
                style={{ height: "130px" }}
              ></textarea>
              <div className="invalid-feedback">Add a message.</div>
            </div>
            <div className="mb-4">
              <button className="btn" type="submit" value="send">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // Emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ml7w9b4", "template_n3wraii", form.current, {
        publicKey: "aqXXQ-3dc-F8aufQM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section className="contact-wrapper">
        <section className="contact">
          <form ref={form} onSubmit={sendEmail}>
            <div className="section-heading">
              <h1>Let's Talk</h1>
              <h6>Contact me here</h6>
            </div>
            <div className="field">
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Who are you?"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="field">
              <input
                type="text"
                id="email"
                name="user_email"
                placeholder="name@domain.xyz"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="field">
              <textarea
                id="msg"
                rows={4}
                name="message"
                placeholder="You message..."
                defaultValue={""}
              />
              <label htmlFor="msg">Msg</label>
            </div>
            <input className="button" type="submit" value="Send" />
          </form>
        </section>
      </section>
    </>
  );
}

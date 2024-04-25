import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { useState } from "react";

export default function Contact() {
  const [nameid, setnameid] = useState("");
  const [emailId, setemailId] = useState("");
  const [messageUser, setmessageUser] = useState("");

  // Emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      nameid.length === 0 ||
      emailId.length === 0 ||
      messageUser.length === 0
    ) {
      swal("Try Again!!", "Name, Email and message cannot be empty", "error");
    } else {
      emailjs
        .sendForm("service_ml7w9b4", "template_n3wraii", form.current, {
          publicKey: "aqXXQ-3dc-F8aufQM",
        })
        .then(
          () => {
            setemailId("");
            setmessageUser("");
            setnameid("");
            swal(
              "I'll get back to you.",
              "Email sent Successfully!",
              "success"
            );
          },
          (error) => {
            swal(
              "Try Again!!",
              "Something went wrong please try again after sometime",
              "error"
            );
          }
        );
    }
  };
  return (
    <>
      <section className="contact-wrapper">
        <section className="contact">
          <form ref={form} onSubmit={sendEmail} name="contactForm">
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
                value={nameid}
                onChange={(e) => setnameid(e.target.value)}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="field">
              <input
                type="text"
                id="email"
                name="user_email"
                placeholder="name@domain.xyz"
                value={emailId}
                onChange={(e) => setemailId(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="field">
              <textarea
                id="msg"
                rows={4}
                name="message"
                placeholder="You message..."
                value={messageUser}
                onChange={(e) => setmessageUser(e.target.value)}
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

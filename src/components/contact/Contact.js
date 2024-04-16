import React, { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a8h9xsg",
        "template_4i5cu2g",
        form.current,
        "k4dDgHClw21w3sbh5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
      
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>razask2003@gmail.com</h5>
            <a href="mailto:razask2003@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsInstagram className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>raza_khan</h5>
            <a href="mailto:razask2003@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>whatsapp</h4>
            <h5>893242923</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8208273304"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="mail" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submin" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

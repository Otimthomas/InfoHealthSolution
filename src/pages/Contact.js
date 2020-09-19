import React from "react";
import ContactForm from "../components/ContactForm";
import Hero from '../components/Hero';
import "./Contact.css";
import img from "../assets/medical4.jpg";

function Contact() {
  return (
    <>
      <Hero img={img} title='Contact Us' />
      <div className='contact'>
        <h1>Hello from the contact page</h1>
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;

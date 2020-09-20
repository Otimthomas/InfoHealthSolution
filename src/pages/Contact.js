import React from "react";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import "./Contact.css";
import img from "../assets/medical4.jpg";
// import Map from "../components/Map";

function Contact() {
  return (
    <>
      <Hero img={img} title='Contact Us' />
      <div className='container'>
        {/* <Map isMarkerShown /> */}
        <div className='contact'>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;

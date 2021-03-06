import React from "react";
import Hero from "../components/Hero";
import img from "../assets/medical6.jpg";
import "./About.css";

function About() {
  return (
    <>
      <Hero img={img} title='About Us' />
      <div className='about'>
        <div className='about__left'>
          <h2 className='about__title'>Background</h2>
          <p>
            INFO HEALTH SOLUTIONS LTD (<span>www.infohealthsolutions.org</span>)
            was established in 2020 to provide health information, reference and
            research consulting services. Completing courses, research and
            publishing assignments is sometimes a challenge due to the
            information science skills gap among researchers and scholars. The
            skill gap makes it hard for faculty, scholars, health workers and
            researchers to find trustworthy, evidence-based and reliable sources
            of information to inform their learning, teaching and research
          </p>
         
        </div>
        <div className='about__right'>
          <h2 className='about__title--values'>Core Values</h2>
          <p>
            <strong>P</strong> - Profesionalism
          </p>
          <p>
            <strong>R</strong> - Respect
          </p>
          <p>
            <strong>I</strong> - Integrity
          </p>
          <p>
            <strong>D</strong> - Diversity
          </p>
          <p>
            <strong>E</strong> - Excellence
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

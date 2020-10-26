import React from "react";
import Intro from "../components/Intro";
import { FaFileMedicalAlt, FaHandsHelping} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {Link} from "react-router-dom";
import HomeTeam from "../components/HomeTeam";
import SlideView from "../components/SlideView";
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <SlideView />
      <Intro />
      <div className='home__services'>
        <div className='home__service'>
          <span className='home__serviceIcon'>
            <FaFileMedicalAlt />
          </span>
          <h4>Research Support</h4>
          <p className='home__serviceText'>
            We support health researchers in literature searching for single
            studies, scoping reviews, systematic reviews and evidence and gap
            maps.
          </p>
          <Link className='home__serviceLink' to='/services'>
            Read More
          </Link>
        </div>
        <div className='home__service'>
          <span className='home__serviceIcon'>
            <FaHandsHelping />
          </span>
          <h4>Capacity Building</h4>
          <p className='home__serviceText'>
            We conduct training for researchers, facultly and students (boths
            graduate and under-graduate)
          </p>
          <Link className='home__serviceLink' to='/services'>
            Read More
          </Link>
        </div>
      </div>

      <div className='home__contact'>
        <h3 className='home__contactTitle'>Want more information?</h3>
        <p className='home__contactText'>
          Get in touch with us for more information.
        </p>
        <Link className='home__contactLink' to='/contact'>
          <span className='home__contactIcon'>
            <GrMail />
          </span>
          Contact Us
        </Link>
      </div>

      <HomeTeam />
    </div>
  );
}

export default Home;

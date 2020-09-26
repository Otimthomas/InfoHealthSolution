import React from "react";
import {Link} from "react-router-dom";
import {BsInfoCircleFill} from "react-icons/bs";
import {RiGalleryFill} from "react-icons/ri";
import "./Intro.css";

function Intro() {
  return (
    <div className='intro'>
      <div className='intro__left'>
        <h2 className='intro__title'>+ Welcome</h2>
        <p className='intro__text'>
          We believe that information is power when its is shared and used to
          add value to the health and well being of people. While we are
          consultants in health information, we are also researchers and have
          been scholars and are therefore familiar with the challenges
          encountered along the research, learning and teaching cycles.
        </p>
        <p className='intro__text'>
          With increased use of evidence based medicine information resources,
          we look forward to providing up-to-date, evidence information to
          support all stakeholders in learning, teaching, research and patient
          care.
        </p>
      </div>
      <div className='intro__right'>
        <Link className='intro__link' to='/about'>
          <span className='intro__icon'>
            <BsInfoCircleFill />
          </span>
          About Us
        </Link>
        <Link className='intro__link' to='/gallery'>
          <span className='intro__icon'>
            <RiGalleryFill />
          </span>
          Gallery
        </Link>
      </div>
    </div>
  );
}

export default Intro;

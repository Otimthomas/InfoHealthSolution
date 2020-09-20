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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            velit beatae odio facere? Cumque, a et repudiandae, laboriosam nemo
            pariatur possimus voluptatum, quod ut quidem mollitia. Sapiente
            sequi aliquam vero accusamus numquam officia corporis repudiandae
            repellendus, rem sed? Maiores magnam minima modi facilis
            reprehenderit aut aliquid expedita recusandae perspiciatis iste.
          </p>
          <p className='intro__text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus aut dolorum facilis error soluta! Ut cum aliquam
            praesentium iure quae quas saepe sapiente culpa dolores quis.
            Exercitationem obcaecati enim accusamus ab autem, harum nesciunt
            expedita.
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

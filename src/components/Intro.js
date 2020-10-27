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
          We believe that information is power because informed human beings have
          the potential to control their own destiny, their career, their money,
          make their own decisions, and add value to their health and well being. 
          Information is valuable for trade when you have it and someone else wants it.
          But, if that information becomes known to others - if you lose exclusive 
          control of it - then it becomes nearly worthless to you to trade. However,
          it still remains useful to you for other things. That is the power of 
          information. Information can be shared, and then used over and over again, 
          without exhaustion. Researchers use information to generate further research, 
          health workers use information in patient care, traders use information to make
          money, and mothers use information to take care of their children. Information
          is effectively an infinite resource, and as Toffler predicted in 1990, Information
          has become the predominant source of power in society today.
        </p>
        <p className='intro__text'>
          While we at INFO HEALTH SOLUTIONS LTD are consultants in health information, we are also 
          researchers and scholars, and are therefore familiar with the challenges encountered in
          learning, teaching and research. We have come to appreciate the fact that, while
          evidence based medicine (EBM) improves patient outcomes, locating this information
          cannot be taken for granted, because health workers, students and faculty do not 
          necessarily have the skills of locating and repackaging this information for use when 
          needed. We at INFO HEALTH SOLUTIONS LTD have the required skills.
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

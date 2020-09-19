import React from "react";
import Intro from "../components/Intro";
import {FaAccusoft} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {Link} from "react-router-dom";
import HomeTeam from "../components/HomeTeam";
import SlideView from "../components/SlideView";
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <SlideView />
        <Intro />
      </div>
      <div className='home__services'>
        <div className='home__service'>
          <span className='home__serviceIcon'>
            <FaAccusoft />
          </span>
          <p className='home__serviceText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim
            repellat veritatis nobis eaque rem. Nisi distinctio illum odit
            excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti odio illo necessitatibus perferendis, sed nemo
          </p>
          <Link className='home__serviceLink' to='/services'>
            Read More
          </Link>
        </div>
        <div className='home__service'>
          <span className='home__serviceIcon'>
            <FaAccusoft />
          </span>
          <p className='home__serviceText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim
            repellat veritatis nobis eaque rem. Nisi distinctio illum odit
            excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti odio illo necessitatibus perferendis, sed nemo
          </p>
          <Link className='home__serviceLink' to='/services'>
            Read More
          </Link>
        </div>
        <div className='home__service'>
          <span className='home__serviceIcon'>
            <FaAccusoft />
          </span>
          <p className='home__serviceText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim
            repellat veritatis nobis eaque rem. Nisi distinctio illum odit
            excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti odio illo necessitatibus perferendis, sed nemo
          </p>
          <Link className='home__serviceLink' to='/services'>
            Read More
          </Link>
        </div>
        <div className='home__service'>
          <span className='home__serviceIcon'>
            <FaAccusoft />
          </span>
          <p className='home__serviceText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim
            repellat veritatis nobis eaque rem. Nisi distinctio illum odit
            excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti odio illo necessitatibus perferendis, sed nemo
          </p>
          <Link className='home__serviceLink' to='/services'>
            Read More
          </Link>
        </div>
      </div>

      <div className='home__contact'>
        <h3 className='home__contactTitle'>Want more information?</h3>
        <p className='home__contactText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          animi tenetur consequuntur facilis. Neque placeat alias ducimus a sunt
          nihil!
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

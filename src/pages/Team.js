import React from "react";
import Hero from "../components/Hero";
import img from "../assets/medical3.jpg";
import "./Team.css";

function Team() {
  return (
    <>
      <Hero img={img} title='meet the team' />
      <div className='team'>
        <h1>Hello from Team page</h1>
      </div>
    </>
  );
}

export default Team;

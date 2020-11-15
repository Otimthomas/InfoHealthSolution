import React from "react";
import {FaFileMedicalAlt, FaHandsHelping} from "react-icons/fa";
import Hero from "../components/Hero";
import img from "../assets/medical8.jpg";
import "./Services.css";

function Services() {
  return (
    <>
      <Hero img={img} title='Our Services' />

      <div className='services'>
        <div className='services__service'>
          <span className='services__serviceIcon'>
            <FaFileMedicalAlt />
          </span>
          <h4>Research Support</h4>
          <p className='services__serviceText'>
            We support health researchers in literature searching for single
            studies, scoping reviews, systematic reviews and evidence and gap
            maps:
            <ul>
              <li>
                We develop search strategies based on population, intervention,
                comparison and outcomes(PICO)
              </li>
              <li>
                We systematically search scholarly databases and grey literature
              </li>
              <li>
                We do citation tracking and reference list screening for
                additional literature
              </li>
              <li>We manage references using EndNote and Mendeley programs</li>
              <li>
                We use review programs such as EPPI Reviewer to support coding
              </li>
              <li>We do plagiarism check for pre-published research</li>
              <li>We support grant writing and biosketches</li>
              <li>Reviewing, editing and proofreading of academic research and journal articles</li>
              <li>Identifying relevant journals to publish research results</li>
              <li>
                Proof reading and editing of research articles for publication
              </li>
            </ul>
          </p>
        </div>
        <div className='services__service'>
          <span className='services__serviceIcon'>
            <FaHandsHelping />
          </span>
          <h4>Capacity Building</h4>
          <p className='services__serviceText'>
            We conduct training for researchers, facultly and students (boths
            graduate and under-graduate) in the following areas:
            <ul>
              <li>
                Developing search strategies for single studies and evidence
                syntheses
              </li>
              <li>Database searching</li>
              <li>Reference management using EndNote and Mendeley</li>
              <li>Plagiarism checking</li>
              <li>Introduction to systematic literature reviews</li>
              <li>Scholarly writing and communication skills</li>
              <li>Presentation of research findings</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;

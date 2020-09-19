import React from 'react'
import Hero from '../components/Hero';
import img from '../assets/medical3.jpg';
import './Services.css';

function Services() {
	return (
		<>
      <Hero img={img} title="Our Services" />

		<div className="services">
			<h1>Hello from the services page</h1>
		</div>
		</>
	)
}

export default Services

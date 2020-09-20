import React from "react";
import "./HomeTeam.css";
import MultiCarousel from "./MultiCarousel";

function HomeTeam() {
  const team = [
    {
      id: 1,
      img:
        "https://www.kirkham-legal.co.uk/wp-content/uploads/2017/02/profile-placeholder.png",
      name: "Dr. Kevin Nuwe",
      position: "Managing Director",
      history: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore quoamet commodi nihil perferendis nostrum unde tempora. Libero eius culpa	adipisci? Inventore laudantium nisi, voluptatum iusto nam aut blanditiis
	accusamus obcaecati sed quae quidem libero nesciunt illo, impedit maiores.`,
    },
    {
      id: 2,
      img:
        "https://www.kirkham-legal.co.uk/wp-content/uploads/2017/02/profile-placeholder.png",
      name: "Dr. Kevin Nuwe",
      position: "Managing Director",
      history: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore quoamet commodi nihil perferendis nostrum unde tempora. Libero eius culpa	adipisci? Inventore laudantium nisi, voluptatum iusto nam aut blanditiis
	  accusamus obcaecati sed quae quidem libero nesciunt illo, impedit maiores.`,
    },
    {
      id: 3,
      img:
        "https://www.kirkham-legal.co.uk/wp-content/uploads/2017/02/profile-placeholder.png",
      name: "Dr. Kevin Nuwe",
      position: "Managing Director",
      history: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore quoamet commodi nihil perferendis nostrum unde tempora. Libero eius culpa	adipisci? Inventore laudantium nisi, voluptatum iusto nam aut blanditiis
	  accusamus obcaecati sed quae quidem libero nesciunt illo, impedit maiores.`,
    },
    {
      id: 4,
      img:
        "https://www.kirkham-legal.co.uk/wp-content/uploads/2017/02/profile-placeholder.png",
      name: "Dr. Kevin Nuwe",
      position: "Managing Director",
      history: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore quoamet commodi nihil perferendis nostrum unde tempora. Libero eius culpa	adipisci? Inventore laudantium nisi, voluptatum iusto nam aut blanditiis
	  accusamus obcaecati sed quae quidem libero nesciunt illo, impedit maiores.`,
    },
  ];
  return (
    <div className="container">
      <div className='hometeam'>
        <h2 className='hometeam__title'>Our team</h2>
        <p>Get to know some of our team members</p>
        <div className='hometeam__cards'>
          <MultiCarousel data={team}>
            {team.map((item) => (
            <div className='hometeam__card'>
              <img className='hometeam__cardImg' src={item.img} alt={item.name} />
              <p className='hometeam__cardName'>{item.name}</p>
              <h3 className='hometeam__cardPosition'>{item.position}</h3>
              <p className='hometeam__cardText'>{item.history}</p>
            </div>
          ))}
          </MultiCarousel>
        </div>
      </div>
    </div>
  );
}

export default HomeTeam;

import React from "react";
import "./HomeTeam.css";
import MultiCarousel from "./MultiCarousel";

function HomeTeam() {
  const team = [
    {
      id: 1,
      img:
        "https://www.kirkham-legal.co.uk/wp-content/uploads/2017/02/profile-placeholder.png",
      name: "Dr. Alison Annet Kinengyere",
      position: "Director",
      history: `Dr. Alison Annet Kinengyere works at the Makerere University College of Health
      Sciences as an information scientist, heading the Sir Albert Cook Medical Library. She is 
      also faculty at the Africa Centre of Systematic Reviews and Knowledge Translation, at the 
      College of Health Sciences. She has a [...]`,
    },
    {
      id: 2,
      img:
        "https://www.kirkham-legal.co.uk/wp-content/uploads/2017/02/profile-placeholder.png",
      name: "Kevin Nuwatuhikize",
      position: "Director",
      history: `Kevin Nuwatuhikize holds a Bachelor's in Biomedical Sciences from
      College of Health Sciences Makerere University with an elective in Micro and 
      Molecular Biology. He is also an Entrepreneur and Managing Director of Alphas Media.`,
    }
  ];
  return (
    <div className='hometeam'>
      <h2 className='hometeam__title'>Our team</h2>
      <p>Get to know some of our team members</p>
      <div className='hometeam__cards'>
        <MultiCarousel data={team}>
          {team.map((item) => (
            <div className='hometeam__card'>
              <img
                className='hometeam__cardImg'
                src={item.img}
                alt={item.name}
              />
              <p className='hometeam__cardName'>{item.name}</p>
              <h3 className='hometeam__cardPosition'>{item.position}</h3>
              <p className='hometeam__cardText'>{item.history}</p>
            </div>
          ))}
        </MultiCarousel>
      </div>
    </div>
  );
}

export default HomeTeam;

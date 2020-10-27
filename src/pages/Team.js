import React from "react";
import Hero from "../components/Hero";
import img from "../assets/medical11.jpg";
import "./Team.css";

function Team() {
  const team = [
    {
      id: 1,
      img: "img/pp-5.JPG",
      name: "Dr. Alison Annet Kinengyere",
      position: "Director",
      history: `Dr. Alison Annet Kinengyere works at the Makerere University College of Health
      Sciences as an information science specialist, heading the Sir Albert Cook Medical Library. She is 
      also faculty at the Africa Centre of Systematic Reviews and Knowledge Translation (AFCen), at the 
      College of Health Sciences. She has a Swedish Government-supported PhD holder in Information
      science, a Masters in Information Science and a Bachelor of Library and Information Science of Makerere 
      University. She has authored and co-authored a number of research publications in high impact journals.
      She is involved in capacity building and mentorship of medical students, faculty and students at Makerere University,
        Mbarara University of Science and Technology, Busitema University and Gulu University, 
        and Action for Development (ACODE), and a number of research organisations. She is an US International Cunningham Fellow (2007) and 
        a Training Champion with Better Evidence at Ariadne Labs and the Global Health Delivery Project
        at Harvard (2020). She trained comprehensive systematic reviews training at the Joanna Briggs Institute,
        Kingstone, Canada (2018), and at the Institute of Education, University of London (2016). She
        is currently the Principle Investigator of the European Union-funded African Higher Education
        Leadership in Advancing Inclusive Innovation for Development (AHEAD). She is part of the covid-19 pandemic rapid 
        evidence syntheses (COVEPRES) currently implementing activities for the following projects;
      `,
      list: [
        "Youth Employment Evidence and Map Gap under the MasterCard Foundation",
        "Women's Groups review under the Campbell Collaboration",
        "Three COVID-19 evidence syntheses on the use of masks, testing and health worker safety, under the Makerere University Research and Innovation Fund",
      ],
    },
    {
      id: 2,
      img: "img/pp-1.JPG",
      name: "Mr. Kevin Nuwatuhikize",
      position: "Director",
      history: `Kevin Nuwatuhikize holds a Bachelor's in Biomedical Sciences from
      College of Health Sciences Makerere University with an elective in Micro and 
      Molecular Biology. He is also an Entrepreneur and Managing Director of Alphas Media.`,
    },
  ];

  return (
    <>
      <Hero img={img} title='meet the team' />
      <div className='team'>
        <div className='team__cards'>
          {team.map((item) => (
            <div className='team__card'>
              <img className='team__cardImg' src={item.img} alt={item.name} />
              <p className='team__cardName'>{item.name}</p>
              <h3 className='team__cardPosition'>{item.position}</h3>
              <p className='team__cardText'>{item.history}</p>
              {item.list && (
                <p className='team__cardList'>
                  {item.list.map((list) => {
                    return (
                      <ul>
                        <li>{list}</li>
                      </ul>
                    );
                  })}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;

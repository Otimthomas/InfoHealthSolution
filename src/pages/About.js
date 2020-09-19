import React from "react";
import Hero from "../components/Hero";
import img from "../assets/medical5.jpg";
import "./About.css";

function About() {
  return (
    <>
      <Hero img={img} title="About Us" />
      <div className='container'>
        <div className='about'>
          <div className='about__left'>
            <h2 className='about__title'>Background</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, nisi.
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              unde vero pariatur. Placeat exercitationem temporibus qui. Cum
              officiis tempora eius?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit vero aliquam velit deserunt, expedita facilis, odit
              veniam cum illum incidunt in blanditiis placeat iste veritatis
              ipsa numquam perferendis totam eos iure neque dicta vitae sed! Eum
              neque praesentium, voluptas non tenetur recusandae, reprehenderit
              placeat ratione enim, quos voluptatem facere veritatis rem. Vel
              commodi nihil tenetur atque dolore debitis esse voluptates, sequi
              eos id earum harum officia ducimus reiciendis perspiciatis dolores
              recusandae possimus necessitatibus laborum, eligendi similique
              maiores doloribus inventore alias. Enim laudantium quas nam atque
              sit odio aut praesentium accusantium! Unde dolor tenetur optio
              dolorem, neque cumque, eaque odio quasi doloremque nulla
              voluptatibus numquam perspiciatis consectetur molestias cum
              tempore saepe iste perferendis voluptatum alias aliquid officiis
              earum? Ipsa eveniet delectus accusamus adipisci eos dignissimos
              eum tempore nam itaque modi cupiditate possimus iste facilis,
              sapiente nostrum magnam distinctio aut neque harum? Odit culpa eos
              debitis! Animi porro hic modi officia nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              necessitatibus sed iste reiciendis obcaecati repellat quaerat
              nesciunt quam veniam fugiat!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              necessitatibus sapiente quod, nostrum repellat aperiam magnam
              dolor, molestiae voluptatem facilis id nemo, rerum consequatur
              illum quam mollitia dolorem cupiditate accusantium facere debitis.
              Non iusto aspernatur sit quos blanditiis nemo a?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              recusandae ratione alias fugit suscipit accusantium magni, quo,
              veniam impedit doloribus quisquam. Facere quod dolorum hic
              voluptate dignissimos qui earum aliquid.
            </p>
          </div>
          <div className='about__right'>
            <h2 className='about__title--values'>Core Values</h2>
            <p>
              <strong>P</strong> - Profesionalism
            </p>
            <p>
              <strong>R</strong> - Respect
            </p>
            <p>
              <strong>I</strong> - Integrity
            </p>
            <p>
              <strong>D</strong> - Diversity
            </p>
            <p>
              <strong>E</strong> - Excellence
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

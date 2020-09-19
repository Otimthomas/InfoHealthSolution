import React from "react";
import styled from "styled-components";
// import mainBcg from '../assets/mainBcg.jpeg';

export default function Hero({img, title, max, children}) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className='banner'>
        <h1 className='title'>{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? "100vh" : "30vh")};
  color: #fff;
  background: linear-gradient(rgba(0,0,0, .3), rgba(0,0,0, .3)),
	url(${(props) => props.img}) center/cover no-repeat;
	margin-bottom: 2.5rem;
  .title {
    padding-top: 2rem;
    font-size: 3rem;
    /* text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3); */
    text-transform: uppercase;
    /* letter-spacing: var(--mainSpacing); */
  }
`;

// Hero.defaultProps = {
//   img: mainBcg,
// };

import styled from "@emotion/styled"

import img1 from "./../../public/images/playboy1.jpg"
import img2 from "./../../public/images/playboy2.jpg"
import img3 from "./../../public/images/playboy3.jpg"

import Image from "next/image"

const PlayBoy = () => {
  return (
    <StyledSection>
      <h2>Playboy Beer Garden Zirakpur</h2>
      <div className="media">
        <Image src={img1} alt="playboy interior" placeholder="blur" />
        <Image src={img2} alt="playboy interior" placeholder="blur" />
        <Image src={img3} alt="playboy interior" placeholder="blur" />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  color: var(--black);
  h2 {
    font-family: var(--fontSerif);
    line-height: 1;
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 400;

    margin: 0 0 calc(2 * var(--padding)) calc(3 * var(--padding));
  }

  .media {
    width: 100%;
    height: 50%;

    background: #fff;

    display: flex;

    justify-content: flex-start;
    align-items: flex-start;

    overflow: hidden;
    > * {
      height: 100%;
      width: calc(100% / 3);
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 480px) {
    h2 {
      width: min-content;
    }
  }
`

export default PlayBoy

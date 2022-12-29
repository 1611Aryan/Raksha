import styled from "@emotion/styled"

import img1 from "./../../public/images/regas1.jpg"
import img2 from "./../../public/images/regas2.jpg"
import img3 from "./../../public/images/regas3.jpg"

import Image from "next/image"
import { useRef } from "react"

const Regus = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const play = () => {
    if (videoRef.current) {
      videoRef.current.play()
      videoRef.current.controls = true
    }
  }

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.controls = false
    }
  }

  return (
    <StyledSection>
      <h2>Regus</h2>
      <div className="media">
        <Image src={img3} alt="regus interior" placeholder="blur" />
        <Image src={img2} alt="regus interior" placeholder="blur" />
        <Image src={img1} alt="regus interior" placeholder="blur" />
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
      min-width: calc(100% / 3);
      object-fit: cover;
      width: auto;
      //border: 5px solid #fff;
      border-right: 0;
    }
  }

  @media only screen and (max-width: 480px) {
    h2 {
      width: min-content;
    }
  }
`

export default Regus

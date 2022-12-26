import styled from "@emotion/styled"

import img1 from "./../../public/images/playboy1.jpg"
import img2 from "./../../public/images/playboy2.jpg"
import img3 from "./../../public/images/playboy3.jpg"

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
        <Image src={img1} alt="playboy interior" placeholder="blur" />
        <Image src={img2} alt="playboy interior" placeholder="blur" />
        <Image src={img3} alt="playboy interior" placeholder="blur" />
        <video
          ref={videoRef}
          loop
          muted
          controls={false}
          placeholder="blur"
          src="/images/playboy.mp4"
          onMouseEnter={play}
          onMouseLeave={pause}
        ></video>
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
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;

  color: var(--black);
  h2 {
    font-family: var(--fontSerif);
    line-height: 1;
    font-size: 5rem;
    //font-weight: 400;
    margin-right: calc(3 * var(--padding));
  }

  .media {
    height: 80%;
    aspect-ratio: 4/5;
    background: #fff;
    border: 10px solid #fff;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

    transform: translate(calc(-1 * var(--padding))) rotate(-7deg);
    transition: transform ease-in 200ms;

    overflow: hidden;
    & > :is(video, img) {
      flex: 1 1 0;
      object-fit: cover;
      max-height: 50%;
      max-width: 50%;

      transition: transform ease-out 100ms;

      &:hover {
        /* transform: translate(var(--translate)) scale(2);
        transition: transform ease-in 200ms 400ms; */
      }
    }
    video {
      --translate: 0%;
      transform-origin: bottom right;
    }
    img {
      &:nth-of-type(1) {
        --translate: 0%;
        transform-origin: top left;
      }

      &:nth-of-type(2) {
        --translate: -0%;
        transform-origin: top right;
      }
      &:nth-of-type(3) {
        --translate: 0%;
        transform-origin: bottom left;
      }
    }

    &:hover {
      transform: translate(
          calc(-1 * var(--padding)),
          calc(-0.5 * var(--padding))
        )
        rotate(0deg);
    }
  }
`

export default Regus

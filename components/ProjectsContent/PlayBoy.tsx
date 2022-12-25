import styled from "@emotion/styled"

import img1 from "./../../public/images/playboy1.jpg"
import img2 from "./../../public/images/playboy2.jpg"
import img3 from "./../../public/images/playboy3.jpg"

import Image from "next/image"
import { useRef } from "react"

const PlayBoy = () => {
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
      <h2>
        PlayBoy
        <br />
        Mohali
      </h2>
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

  color: var(--black);
  h2 {
    font-family: var(--fontSerif);
    line-height: 1;
    font-size: 6rem;
    font-weight: 400;
    margin-left: calc(3 * var(--padding));
  }

  .media {
    height: 90%;
    aspect-ratio: 4/5;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
    transform: translate(calc(1 * var(--padding))) rotate(6deg);
    transition: transform ease-in 200ms;
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
    & > * {
      flex: 1;
      object-fit: cover;
      height: 50%;
      transition: transform ease-out 100ms;

      &:hover {
        transform: translate(var(--translate)) scale(2);
        transition: transform ease-in 200ms 400ms;
      }
    }
    &:hover {
      transform: translate(
          calc(1 * var(--padding)),
          calc(-0.5 * var(--padding))
        )
        rotate(0deg);
    }
  }
`

export default PlayBoy

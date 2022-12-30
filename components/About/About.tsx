import styled from "@emotion/styled"
import Image from "next/image"
import React, { useRef } from "react"
import aboutBg from "./../../public/images/aboutBg.jpg"

const About = () => {
  const imageRef = useRef<HTMLImageElement>(null)

  const moveHandler = (e: React.MouseEvent) => {
    if (window.innerWidth > 765 && imageRef.current) {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 20
      let yAxis = (window.innerHeight / 2 - e.pageY) / 40
      // imageRef.current.style.transition = "all 1050ms ease-in-out"
      imageRef.current.style.transform =
        "translateX(" + xAxis + "px) translateY(" + yAxis + "px)  scale(1.2)"
    }
  }

  const touchHandler = (e: React.TouchEvent) => {
    console.log(e)
    if (imageRef.current) {
      let xAxis = (window.innerWidth / 2 - e.changedTouches[0].pageX) / 20
      let yAxis = (window.innerHeight / 2 - e.changedTouches[0].pageY) / 20
      console.log({ xAxis, yAxis })
      imageRef.current.style.transform =
        "translateX(" + xAxis + "px) translateY(" + yAxis + "px)  scale(1.2)"
    }

    e.changedTouches[0].pageX
  }

  return (
    <StyledSection
      onMouseMove={moveHandler}
      onTouchMove={touchHandler}
      id="about"
    >
      <Image src={aboutBg} ref={imageRef} alt="indoor furnish" className="bg" />
      <div className="top"></div>
      <div className="bottom"></div>
      <h1 className="aboutHeading">About Us</h1>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--gray);
  overflow: hidden;
  position: relative;

  --height: 50vh;

  .bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.2);
    transition: all 50ms ease-in-out;
  }
  .top {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: var(--height) 100vw 0 0;
    border-color: var(--darkgray) transparent transparent transparent;
  }
  .bottom {
    z-index: 2;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 var(--height) 100vw;
    border-color: transparent transparent var(--darkgray) transparent;
  }
  .aboutHeading {
    position: absolute;
    bottom: var(--padding);
    left: var(--padding);
    z-index: 2;
    font-family: var(--fontSerif);

    color: var(--white);
    font-size: clamp(5.5rem, 13vw, 13rem);
    width: 100%;
    line-height: 0.5;
  }

  @media only screen and (max-width: 480px) {
    --height: 40vh;

    .aboutHeading {
      bottom: calc(2 * var(--padding));
      left: var(--padding);
    }
  }
`
export default About

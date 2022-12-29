import styled from "@emotion/styled"
import Image from "next/image"
import ProjectsBg from "./../../public/images/ProjectBg.jpg"

const Projects = () => {
  return (
    <StyledSection id="projects">
      <Image
        src={ProjectsBg}
        className="projectsBg"
        placeholder="blur"
        alt="skyscrapper"
      />
      <div className="line"></div>
      <h1 className="projectsHeading">Projects</h1>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: var(--white);
  position: relative;

  --height: 75vh;
  --width: 35vw;
  --fontSize: clamp(5rem, 11vw, 10rem);

  .projectsBg {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--width);
    height: var(--height);
    z-index: 2;
  }

  .line {
    position: absolute;
    top: calc(var(--height) - 1 * var(--fontSize));
    left: 0;

    height: 3px;
    width: 100%;
    background: var(--black);
  }

  .projectsHeading {
    position: absolute;
    top: calc(var(--height) - var(--fontSize));
    left: var(--width);

    color: var(--black);
    font-size: var(--fontSize);
    font-family: var(--fontSerif);
    line-height: 1.65;
    font-weight: 400;
  }

  @media only screen and (max-width: 480px) {
    --height: 60vh;
    --width: 75vw;

    .line {
      position: absolute;
      top: calc(var(--height) + 1 * var(--fontSize));
      left: 0;

      height: 3px;
      width: 100%;
      background: var(--black);
    }

    .projectsHeading {
      top: calc(var(--height) + var(--fontSize));
      left: 0;

      width: 100%;
      padding: 0 var(--padding);
    }
  }
`
export default Projects

import styled from "@emotion/styled"
import Image from "next/image"
import Logo from "./../../public/images/LOGO.png"

const AboutUsContent = () => {
  const content =
    "Manifest your dreams with us! <br/> We at Raksha interiors are dedicated to make your life easier. We aspire to give you an experience of mesmerizing construction and interiors/exteriors like never before. We have a solution for all residential and commercial projects."

  return (
    <StyledSection>
      <Image
        src={Logo}
        alt="logo"
        className="aboutBg"
        placeholder="blur"
        priority
      />
      <Image
        src={Logo}
        alt="logo"
        className="aboutLogo"
        placeholder="blur"
        priority
      />
      <p className="aboutContent">
        {content.split(" ").map((a, i) => {
          if (a === "<br/>") return <br key={i} />
          return <span key={i}>{a}&nbsp;</span>
        })}
      </p>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, var(--darkgray) 50%, var(--black));

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: var(--padding);

  position: relative;

  .aboutBg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 70vh;
    width: 70vh;
    opacity: 0.4;
    filter: blur(5px);
  }

  .aboutLogo {
    height: 45vh;
    width: 45vh;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 50%;
    //border: 4px solid var(--black);
    z-index: 2;
    &:hover {
      filter: brightness(110%) saturate(110%);
    }
  }

  .aboutContent {
    width: 45%;
    font-size: 1.85rem;
    line-height: 1.5;
    font-weight: 300;
    color: #fffa;
    z-index: 2;
    span {
      display: inline-block;
      &:hover {
        color: var(--gold);
      }
    }
  }
`

export default AboutUsContent

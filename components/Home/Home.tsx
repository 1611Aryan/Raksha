import styled from "@emotion/styled"
import { useState } from "react"
import BackgroundText from "./BackgroundText"
import Heading from "./Heading"
import Opener from "./Opener"

const Home = () => {
  const [animate, setAnimate] = useState(false)

  return (
    <StyledSection>
      <Opener animate={animate} setAnimate={setAnimate} />
      <Heading />
      <BackgroundText animate={animate} />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  position: relative;

  .open {
    transform: rotate(-150deg) scale(0.5, 0.6);
  }

  .visible {
    opacity: 1;
  }

  @media only screen and (max-width: 480px) {
    .open {
      transform: rotate(-160deg) scale(0.5, 0.4);
    }
  }
`

export default Home

import styled from "@emotion/styled"
import Image from "next/image"
import { Dispatch, useState } from "react"
import { CgMenuRight } from "react-icons/cg"
import logo from "./../../public/images/LOGO.png"
import BackgroundText from "./BackgroundText"
import Heading from "./Heading"
import Opener from "./Opener"

const Home: React.FC<{ setMenu: Dispatch<boolean> }> = ({ setMenu }) => {
  const [animate, setAnimate] = useState(false)

  const clickHandler = () => {
    setAnimate(animate => !animate)
  }

  const openMenu = () => setMenu(true)

  return (
    <StyledSection>
      <Image src={logo} alt="logo" className="logo" />
      <menu onClick={openMenu}>
        <CgMenuRight />
      </menu>
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

  .logo {
    position: absolute;
    top: calc(var(--padding));
    left: var(--padding);
    width: 5rem;
    height: 5rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    z-index: 2;
  }

  menu {
    position: absolute;
    top: calc(var(--padding));
    right: var(--padding);
    color: var(--gray);
    font-size: 2rem;
    cursor: pointer;
    z-index: 3;
  }

  .open {
    transform: rotate(-150deg) scale(0.5, 0.6);
  }

  .visible {
    opacity: 1;
  }
`

export default Home

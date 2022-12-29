import styled from "@emotion/styled"
import { motion } from "framer-motion"
import Link from "next/link"
import { Dispatch } from "react"
import { FaTimes } from "react-icons/fa"

const Menu: React.FC<{
  setMenu: Dispatch<false>
}> = ({ setMenu }) => {
  const variants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  const close = () => setTimeout(() => setMenu(false))

  return (
    <StyledSection
      initial="hidden"
      variants={variants}
      animate="visible"
      exit="hidden"
    >
      <button onClick={close}>
        <FaTimes />
      </button>
      <ul>
        <Link href="#about" onClick={close}>
          <li>
            <span>About</span>
          </li>
        </Link>
        <Link href="#projects" onClick={close}>
          <li>
            <span>Projects</span>
          </li>
        </Link>
        <Link href="#contact" onClick={close}>
          <li>
            <span>Contact Us</span>
          </li>
        </Link>
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled(motion.section)`
  position: fixed;
  inset: 0;
  background: var(--gray);
  z-index: 9;

  button {
    position: absolute;
    top: calc(var(--padding));
    right: var(--padding);
    color: var(--white);
    font-size: clamp(1.5rem, 2vw, 2rem);
    cursor: pointer;
  }

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    a {
      width: 100%;
      height: 100%;
      flex: 1;
      cursor: pointer;
      &:nth-of-type(odd) {
        background: var(--yellow);
      }
    }
    li {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: clamp(2rem, 4vw, 4rem);
        font-weight: 500;
      }

      &:hover {
        span {
          transform: scale(1.1);
        }
      }
    }
  }
`

export default Menu

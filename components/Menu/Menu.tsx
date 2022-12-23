import styled from "@emotion/styled"
import { motion } from "framer-motion"
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

  const close = () => setMenu(false)

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
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled(motion.section)`
  position: fixed;
  inset: 0;
  background: var(--gray);
  z-index: 5;

  button {
    position: absolute;
    top: calc(var(--padding));
    right: var(--padding);
    color: #eee;
    font-size: 2rem;
    cursor: pointer;
  }

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    li {
      width: 100%;
      height: 100%;
      flex: 1;
      cursor: pointer;
      text-align: center;
    }
  }
`

export default Menu

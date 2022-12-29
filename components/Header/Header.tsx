import styled from "@emotion/styled"
import Image from "next/image"
import Link from "next/link"
import { Dispatch, FC } from "react"
import { CgMenuRight } from "react-icons/cg"
import logo from "./../../public/images/LOGO.png"

const Header: FC<{ setMenu: Dispatch<boolean> }> = ({ setMenu }) => {
  const openMenu = () => setMenu(true)
  return (
    <StyledHeader>
      <Link href="/">
        <Image src={logo} alt="logo" className="logo" />
      </Link>
      <menu onClick={openMenu}>
        <CgMenuRight />
      </menu>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;

  top: 0;
  left: 0;
  width: 100vw;
  padding: var(--padding);

  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 7;

  pointer-events: none;

  .logo {
    width: clamp(3rem, 5vw, 5rem);
    height: clamp(3rem, 5vw, 5rem);

    object-fit: cover;
    cursor: pointer;

    pointer-events: auto;
  }

  menu {
    color: var(--gray);
    mix-blend-mode: multiply;
    font-size: clamp(1.5rem, 2vw, 2rem);
    cursor: pointer;
    pointer-events: auto;
  }
`

export default Header

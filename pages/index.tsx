import styled from "@emotion/styled"

import Head from "next/head"
import { useState } from "react"
import About from "../components/About"
import AboutUsContent from "../components/AboutUsContent"
import Contact from "../components/Contact"
import Cursor from "../components/Cursor"
import Header from "../components/Header/Header"
import Home from "../components/Home"
import Menu from "../components/Menu"
import Projects from "../components/Projects"
import ProjectsContent from "../components/ProjectsContent"

const Main = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div>
      <Head>
        <title>Raksha Interior and Exterior</title>
        <meta name="description" content="Raksha Interior and Exterior" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain>
        {menu && <Menu setMenu={setMenu} />}

        <Header setMenu={setMenu} />
        <Home />
        <About />
        <AboutUsContent />
        <Cursor />
        <Projects />
        <ProjectsContent />
        <Contact />
      </StyledMain>
    </div>
  )
}

const StyledMain = styled.main`
  width: 100%;
  height: 800vh;
  overflow-x: hidden;

  .menuVis {
    transform: translate(0);
    opacity: 1;
  }
`

export default Main

import styled from "@emotion/styled"
import { AnimatePresence } from "framer-motion"
import Head from "next/head"
import { useState } from "react"
import About from "../components/About"
import AboutUsContent from "../components/AboutUsContent"
import Contact from "../components/Contact"
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
        <AnimatePresence>{menu && <Menu setMenu={setMenu} />}</AnimatePresence>
        <Header setMenu={setMenu} />
        <Home />
        <About />
        <AboutUsContent />
        <Projects />
        <ProjectsContent />
        <Contact />
      </StyledMain>
    </div>
  )
}

const StyledMain = styled.main`
  width: 100vw;
  height: 800vh;
  overflow-x: hidden;
`

export default Main

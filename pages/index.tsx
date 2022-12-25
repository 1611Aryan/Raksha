import { AnimatePresence } from "framer-motion"
import Head from "next/head"
import { useState } from "react"
import About from "../components/About"
import AboutUsContent from "../components/AboutUsContent"
import Home from "../components/Home"
import Menu from "../components/Menu"
import Projects from "../components/Projects"

const Main = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div>
      <Head>
        <title>Raksha Interior and Exterior</title>
        <meta name="description" content="Raksha Interior and Exterior" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AnimatePresence>{menu && <Menu setMenu={setMenu} />}</AnimatePresence>
        <Home setMenu={setMenu} />
        <About />
        <AboutUsContent />
        <Projects />
      </main>
    </div>
  )
}

export default Main

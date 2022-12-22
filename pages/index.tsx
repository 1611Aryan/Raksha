import { AnimatePresence } from "framer-motion"
import Head from "next/head"
import { useState } from "react"
import Home from "../components/Home"
import Menu from "../components/Menu"

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
      </main>
    </div>
  )
}

export default Main

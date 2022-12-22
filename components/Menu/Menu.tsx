import { motion } from "framer-motion"
import { Dispatch } from "react"
import { FaTimes } from "react-icons/fa"

import styles from "./Menu.module.scss"

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
    <motion.section
      initial="hidden"
      variants={variants}
      animate="visible"
      exit="hidden"
      className={styles.Menu}
    >
      <button onClick={close}>
        <FaTimes />
      </button>
      <ul>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </motion.section>
  )
}

export default Menu

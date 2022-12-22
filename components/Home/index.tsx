import { Dispatch, useState } from "react"
import { CgMenuRight } from "react-icons/cg"
import HomeStyles from "./Home.module.scss"

const Home: React.FC<{ setMenu: Dispatch<boolean> }> = ({ setMenu }) => {
  const [animate, setAnimate] = useState(false)

  const clickHandler = () => {
    setAnimate(animate => !animate)
  }

  const openMenu = () => setMenu(true)

  return (
    <section className={HomeStyles.Home2}>
      <menu onClick={openMenu}>
        <CgMenuRight />
      </menu>
      <div
        onClick={clickHandler}
        className={`${HomeStyles.left} ${animate ? HomeStyles.open : ""}`}
      >
        <h1>RAK</h1>
        <h3>INTERIORS&nbsp;</h3>
      </div>
      <div
        onClick={clickHandler}
        className={`${HomeStyles.right} ${animate ? HomeStyles.open : ""}`}
      >
        <h1>SHA</h1>
        <h3>&nbsp;EXTERIORS</h3>
      </div>
      <div className={`${HomeStyles.tagline} ${animate && HomeStyles.visible}`}>
        <h1>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
        <h1>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
        <h1>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
        <h1>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
        <h1>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
        <h1>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
        <h1>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
        <h1>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
        <h1>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
        <h1>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
      </div>
    </section>
  )
}

export default Home

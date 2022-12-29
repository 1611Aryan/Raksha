import styled from "@emotion/styled"
import { Dispatch, SetStateAction } from "react"

const Opener: React.FC<{
  setAnimate: Dispatch<SetStateAction<boolean>>
  animate: boolean
}> = ({ setAnimate, animate }) => {
  const clickHandler = () => {
    setAnimate(animate => !animate)
  }

  return (
    <StyledSection>
      <div onClick={clickHandler} className={`left ${animate ? "open" : ""}`}>
        <h1>RAK</h1>
        <h3>INTERIORS&nbsp;</h3>
      </div>
      <div onClick={clickHandler} className={`right ${animate ? "open" : ""}`}>
        <h1>SHA</h1>
        <h3>&nbsp;EXTERIORS</h3>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 9;
  pointer-events: none;

  .left,
  .right {
    flex: 1;
    width: 50%;
    height: 100%;
    z-index: 4;

    pointer-events: auto;

    background: var(--gray);
    display: flex;
    justify-content: center;
    flex-direction: column;

    position: relative;

    font-size: clamp(4rem, 6vw, 6rem);
    max-width: calc(100% - var(--padding) * 2);
    line-height: 0.6;

    transition: transform ease 500ms;
    cursor: pointer;

    h1 {
      font-weight: 700;
      font-family: var(--fontSerif);
    }

    h3 {
      font-size: 0.4em;
      //  letter-spacing: 0.05ch;
      font-weight: 500;
    }

    &::before {
      --width: clamp(0.5rem, 2vw, 1rem);
      content: "";
      position: absolute;
      top: var(--padding);
      left: var(--padding);
      right: var(--padding);
      bottom: var(--padding);
      border: var(--width) solid var(--yellow);
      background: transparent;
    }
  }
  .left {
    align-items: flex-end;
    transform-origin: center left;

    &::before,
    &::after {
      right: 0;
      border-right: 0;
    }
  }
  .right {
    align-items: flex-start;
    transform-origin: right;
    &::before,
    &::after {
      left: 0;
      border-left: 0;
    }
  }
`

export default Opener

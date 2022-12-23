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
  width: 100%;
  height: 100%;
  display: flex;

  .left,
  .right {
    flex: 1;
    width: 50%;
    height: 100%;
    z-index: 4;

    background: var(--gray);
    display: flex;
    justify-content: center;
    flex-direction: column;

    position: relative;

    font-size: 5rem;
    line-height: 1;

    transition: transform ease 500ms;
    cursor: pointer;

    h3 {
      font-size: 0.56em;
      line-height: 1;
    }

    &::before {
      --padding: 2rem;
      --width: 1rem;
      content: "";
      position: absolute;
      top: var(--padding);
      left: var(--padding);
      right: var(--padding);
      bottom: var(--padding);
      border: var(--width) solid var(--yellow);
      background: transparent;
    }
    &::after {
      --padding: 3rem;
      --width: 0;
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

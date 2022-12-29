import styled from "@emotion/styled"
import React, { useRef } from "react"

const Cursor = () => {
  const divRef = useRef<HTMLDivElement>(null)

  const mouseEnter = () => {
    if (!divRef.current) return

    divRef.current.style.setProperty("--size", "5rem")
  }

  const moveHandler = (e: React.MouseEvent) => {
    if (!divRef.current) return

    const y = e.pageY - 3 * window.innerHeight
    divRef.current.style.clipPath = `circle(var(--size) at ${e.clientX}px ${y}px)`
  }

  const mouseLeave = () => {
    if (!divRef.current) return

    divRef.current.style.setProperty("--size", "0")
  }

  return (
    <StyledDiv
      onMouseMove={moveHandler}
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
    >
      <div ref={divRef} className="cursor"></div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: absolute;
  top: 300vh;
  left: 0;

  width: 100%;
  height: 400vh;

  --size: 5rem;

  z-index: 1;
  background: var(--white);

  .cursor {
    width: 100%;
    height: 100%;
    background: var(--black);

    opacity: 0.5;
    transition: all 200ms ease-out;

    clip-path: circle(5rem at 10% 10%);
  }
`
export default Cursor

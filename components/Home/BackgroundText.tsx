import styled from "@emotion/styled"

const BackgroundText: React.FC<{ animate: boolean }> = ({ animate }) => {
  return (
    <StyledDiv className={animate ? "visible" : ""}>
      {new Array(13).fill(null).map((_, i) => (
        <h1 key={i}>CREATING THINGS THAT CAN&apos;T BE UNSEEN</h1>
      ))}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  text-align: center;
  width: 100%;
  height: 100%;

  opacity: 0;
  mix-blend-mode: exclusion;
  transition: all ease-in-out 500ms;

  h1 {
    width: max-content;

    text-align: justify;
    font-size: 4.65vw;
    font-weight: 900;
    line-height: 0.9;
  }

  h1:nth-of-type(odd) {
    color: var(--inverse);
  }
  h1:nth-of-type(even) {
    color: var(--yellow);
  }
`
export default BackgroundText

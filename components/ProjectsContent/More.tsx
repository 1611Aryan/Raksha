import styled from "@emotion/styled"

const More = () => {
  return (
    <StyledSection>
      <h1>And Many More...</h1>
      <a href="/" target="_blank" rel="noreferrer">
        Visit us on Instagram
      </a>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;

  color: var(--black);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  padding: var(--padding);

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    line-height: 1;
    font-weight: 400;
    font-family: var(--fontSerif);
    text-align: center;
  }

  a {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    padding: clamp(0.75rem, 1vw, 1rem) clamp(1.5rem, 2vw, 2rem);
    border-radius: 30px;
    background: var(--yellow);
    color: var(--black);

    transition: all linear 100ms;

    pointer-events: auto;

    &:hover {
      background: var(--darkgray);
      color: var(--white);
    }
  }
`

export default More

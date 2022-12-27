import styled from "@emotion/styled"

const More = () => {
  return (
    <StyledSection>
      <h1>And Many More...</h1>
      <a
        href="https://www.instagram.com/aryyyy_an/"
        target="_blank"
        rel="noreferrer"
      >
        Visit us on Instagram
      </a>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;

  color: var(--black);
  background: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 5rem;
    line-height: 1;
    font-weight: 400;
    font-family: var(--fontSerif);
  }

  a {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border-radius: 30px;
    background: var(--yellow);
    color: var(--black);

    transition: all linear 100ms;

    &:hover {
      background: var(--darkgray);
      color: var(--white);
    }
  }
`

export default More

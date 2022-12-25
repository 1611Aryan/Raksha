import styled from "@emotion/styled"

const Heading = () => {
  return (
    <StyledDiv>
      <div>
        <h1>RAKSHA</h1>
        <h3>INTERIORS AND EXTERIORS</h3>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  z-index: 2;

  div {
    font-size: 5.5rem;
    line-height: 0.5;
    border: 0.8rem solid var(--white);
    background: #0002;
    backdrop-filter: blur(2px);
    padding: 5rem 4rem;

    box-shadow: 20px 20px 15px #0005;

    h1 {
      font-weight: 700;
      font-family: var(--fontSerif);
    }

    h3 {
      font-size: 0.41em;
      letter-spacing: 0.05ch;
      font-weight: 500;
    }
  }
`
export default Heading

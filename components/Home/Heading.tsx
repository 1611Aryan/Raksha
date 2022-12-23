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
    font-size: 5rem;
    line-height: 0.8;
    border: 0.8rem solid #fff;
    background: #0002;
    backdrop-filter: blur(2px);
    padding: 5rem 4rem;

    box-shadow: 20px 20px 15px #0005;

    h1 {
      font-weight: 700;
    }

    h3 {
      font-size: 0.47em;
      font-weight: 500;
    }
  }
`
export default Heading

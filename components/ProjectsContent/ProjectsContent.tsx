import styled from "@emotion/styled"
import More from "./More"
import PlayBoy from "./PlayBoy"
import Regus from "./Regus"

const ProjectsContent = () => {
  return (
    <StyledSection>
      <PlayBoy />
      <Regus />
      <More />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  min-height: 300vh;
  position: relative;
  background: transparent;
  pointer-events: none;
  z-index: 3;
`
export default ProjectsContent

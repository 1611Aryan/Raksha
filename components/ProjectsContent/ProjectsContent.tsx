import styled from "@emotion/styled"
import PlayBoy from "./PlayBoy"

const ProjectsContent = () => {
  return (
    <StyledSection>
      <PlayBoy />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  min-height: 100%;
  background: var(--white);
`
export default ProjectsContent

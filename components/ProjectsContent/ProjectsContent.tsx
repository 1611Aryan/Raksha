import styled from "@emotion/styled"
import { StaticImageData } from "next/image"
import { Dispatch, SetStateAction } from "react"

import More from "./More"
import PlayBoy from "./PlayBoy"
import Regus from "./Regus"

const ProjectsContent: React.FC<{
  setImages: Dispatch<SetStateAction<StaticImageData[] | null>>
}> = ({ setImages }) => {
  return (
    <StyledSection>
      <PlayBoy setImages={setImages} />
      <Regus setImages={setImages} />
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

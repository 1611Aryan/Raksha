import styled from "@emotion/styled"
import Image, { StaticImageData } from "next/image"
import React, { Dispatch, SetStateAction, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Gallery: React.FC<{
  images: StaticImageData[]
  setImages: Dispatch<SetStateAction<StaticImageData[] | null>>
}> = ({ images, setImages }) => {
  const [index, setIndex] = useState(0)
  const len = images.length

  const close = () => {
    setImages(null)
  }

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (index > 0) setIndex(index => index - 1)
    else setIndex(len - 1)
  }

  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (index == len - 1) setIndex(0)
    else setIndex(index => index + 1)
  }

  return (
    <StyledSection onClick={close}>
      <div className="left">
        <FaChevronLeft className="icon" onClick={prev} />
      </div>
      <Image
        onClick={e => e.stopPropagation()}
        src={images[index]}
        alt="project showcase"
        className="img"
      />
      <div className="right">
        <FaChevronRight className="icon" onClick={next} />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 999;

  background: #000e;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: var(--padding);

  font-size: clamp(1.5rem, 3vw, 3rem);

  .left,
  .right {
    min-width: 5%;
    max-width: 10%;
    display: grid;
    place-items: center;
    .icon {
      cursor: pointer;
    }
  }

  .img {
    max-width: 80%;
    max-height: 100%;
    object-fit: cover;
    user-select: none;
  }

  @media only screen and (max-width: 480px) {
    .img {
      max-height: 70%;
    }
  }
`

export default Gallery

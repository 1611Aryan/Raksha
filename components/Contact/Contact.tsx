import styled from "@emotion/styled"
import Image from "next/image"
import { HiMail } from "react-icons/hi"
import { IoCall } from "react-icons/io5"
import img from "./../../public/images/contactBg.jpg"

const Contact = () => {
  return (
    <StyledSection id="contact">
      <Image
        src={img}
        className="contactBg"
        alt="blueprint"
        placeholder="blur"
      />
      <div className="left"></div>
      <div className="right">
        <div className="top">
          <h1>Contact Us</h1>
          <p>
            Have an Idea?
            <br />
            Let&apos;s discuss and <em>build</em> it <span>together</span>
          </p>
        </div>
        <div className="bottom">
          <div>
            <HiMail className="icon" />
            <span>sunilsood100@gmail.com</span>
          </div>
          <div>
            <IoCall className="icon" />
            <span>+91 8558861165</span>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  color: var(--black);
  z-index: 2;

  .contactBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: overlay;
    z-index: 2;
  }

  .left {
    width: 20%;
    height: 100%;
    background: var(--white);
  }

  .right {
    flex: 1;
    height: 100%;

    .top {
      width: 100%;
      height: 50%;
      background: #fff;

      padding: calc(2 * var(--padding));
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: var(--padding);
      h1 {
        font-family: var(--fontSerif);
        font-size: clamp(3rem, 5vw, 5rem);
        line-height: 0.8;
      }
      p {
        font-size: clamp(1rem, 2vw, 2rem);
        font-weight: 300;

        span {
          color: navy;
          animation: color 5s linear infinite alternate;
        }
      }
    }

    .bottom {
      width: 100%;
      height: 50%;
      background: var(--yellow);

      padding: calc(2 * var(--padding));
      display: flex;
      flex-direction: column;
      gap: var(--padding);

      div {
        display: flex;
        align-items: center;
        gap: var(--padding);

        .icon {
          color: #fff;
          font-size: clamp(2rem, 3vw, 3rem);
        }

        span {
          font-size: clamp(1rem, 2vw, 1.5rem);
          font-weight: 400;
        }
      }
    }
  }

  @keyframes color {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  @media only screen and (max-width: 480px) {
    .left {
      display: none;
    }

    .right {
      width: 100%;
      height: 100%;

      .top {
        p {
          font-weight: 400;
        }
      }
    }
  }
`
export default Contact

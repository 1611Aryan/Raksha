import { css } from "@emotion/react"

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --padding: 2rem;
    --yellow: #f2aa4c;
    --gray: #101820;
  }

  html,
  body {
    font-family: "Inter", sans-serif;
    color: #fff;
    background: #000;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Inter", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`
export default GlobalStyle

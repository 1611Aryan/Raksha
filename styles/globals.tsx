import { css } from "@emotion/react"

const GlobalStyle = css`
  :root {
    --padding: 2rem;
    --inverse: #19716b;
    --yellow: #f2aa4c;
    --gold: #d8b944;
    --gray: #101820;
    --darkgray: #090e13;
    --black: #000;
    --white: #ecece4;
    /* --fontSerif: "SilkSerif", serif;
    --fontSans: "SilkSerif", sans-serif; */
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: var(--fontSans);
  }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(37, 37, 37, 0);
  }

  html,
  body {
    font-family: var(--fontSans);
    color: var(--white);
    background: var(--darkgray);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--fontSans);
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
      color: var(--white);
      background: var(--darkgray);
    }
  }
`
export default GlobalStyle

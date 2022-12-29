import { css } from "@emotion/react"

const GlobalStyle = css`
  :root {
    --padding: clamp(1rem, 3vw, 2rem);
    --inverse: #19716b;
    --yellow: #f2aa4c;
    --gold: #d8b944;
    --gray: #101820;
    --darkgray: #090e13;
    --black: #222;
    --white: #ecece4;
    --mobile: 480px;
    --ipad: 768px;
    --laptop: 1024px;
    --tv: 1200px;
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

    width: 100%;
    height: 100%;

    scrollbar-color: var(--white) var(--gray);
    scrollbar-width: thin;
  }

  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-track {
    background: var(--gray);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--white);
    border-radius: 2px;
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
`
export default GlobalStyle

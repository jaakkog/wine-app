import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.primaryLight};
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }

  img {
    border-radius: 5px;
    height: auto;
    width: 32rem;
  }

  div {
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }

  small {
    display: block;
  }

  `
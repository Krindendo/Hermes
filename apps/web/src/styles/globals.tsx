import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --ff: "Roboto", "Helvetica", "Arial", sans-serif;
  }
  html,
  body {
    color: ${({ theme }) => theme.palette.primary.main};
    padding: 0;
    margin: 0;
    font-family: var(--ff);
  }

  html,
  body,
  #__next {
    background-color: ${({ theme }) => theme.palette.background.default};
    height: 100%;
    width: 100%;
    display: flex;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  h1{
    font-weight: 300;
    font-size: 6rem;
    line-height: 1.167;
    letter-spacing: -0.1562em;
  }
  h2{
    font-weight: 300;
    font-size: 3.75rem;
    line-height: 1.2;
    letter-spacing: -0.00833em;
  }
  h3{
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.167;
    letter-spacing: 0em
  }
  h4{
    font-weight: 400;
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }
  h5{
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
  }
  h6{
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.16;
    letter-spacing: 0.0075em;
  }
  p{
    font-size: 1rem;
  }
  p.small{
    font-size: 0.85rem;
  }
  .subtitle1{
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75;
    letter-spacing: 0.00938em;
  }
  .subtitle2{
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.57;
    letter-spacing: 0.00714em;
  }
  .body1{
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
  .body2{
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }
  button{
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
  }
`;

export default GlobalStyle;

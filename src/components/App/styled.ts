import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset};

  h1 {
    color: red;
    text-align: center;
    font-family: 'HelveticaNeueBold';
  }

  body {
    background: url('../assets/image/header.jpg') no-repeat top left;
    width: 100%;
  }
`

export const Logo = styled.img`
  width: 50px;
`


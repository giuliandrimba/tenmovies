import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html, body {
    font-size: 10px;
    font-family: ${(props: any) => props.theme.font.body};
    background-color: ${(props: any) => props.theme.color.darkGray};
    color: ${(props: any) => props.theme.color.white};
  }

  h1 {
    color: red;
    text-align: center;
    font-family: ${(props: any) => props.theme.font.heading}
  }

  body {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 50px;
`;

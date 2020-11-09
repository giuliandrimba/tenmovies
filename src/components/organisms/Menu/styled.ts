import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const A = styled(Link)`
  text-decoration: none;
  margin-left: 2.5rem;
`;

export const P = styled.p`
  font-family: ${(props: any) => props.theme.font.body};
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props: any) => props.theme.color.black};
`;

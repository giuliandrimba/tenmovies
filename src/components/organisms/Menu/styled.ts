import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { absCenter } from '../../../data/style/mixins/Mixins';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const P = styled.p`
  font-family: ${(props: any) => props.theme.font.body};
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props: any) => props.theme.color.black};
  opacity: 0;
`;

export const Circle = styled.span`
  display: block;
  width: 1.3rem;
  height: 1.3rem;
  background: ${(props: any) => props.theme.color.black};
  border-radius: 50%;
  ${absCenter};
  opacity: 1;
`;

export const A = styled(Link)`
  text-decoration: none;
  margin-left: 1.5rem;
  position: relative;
  &:hover {
    ${Circle} {
      opacity: 0;
    }
    ${P} {
      opacity: 1;
    }
  }
`;

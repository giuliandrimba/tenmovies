import styled from 'styled-components';
import { absCenter } from '../../../../data/style/mixins/Mixins';

export const Li = styled.li`
  margin-bottom: 2vh;
  cursor: pointer;
  width: 100%;
`;

export const Img = styled.img`
  ${absCenter}
  display: block;
  max-width: 60%;
  max-height: 100%;
  pointer-events: none;
`;

export const P = styled.p`
  font-family: ${(props: any) => props.theme.font.heading};
  color: ${(props: any) => props.theme.color.black};
  font-size: 4vh;
  text-transform: uppercase;
`;

export const Container = styled.div`
  padding-left: 6%;
  padding-right: 6%;
`;

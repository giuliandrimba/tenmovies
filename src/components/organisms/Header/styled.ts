import styled from 'styled-components';
import { absCenter } from '../../../data/style/mixins/Mixins';
import Logo from '../../atoms/Logo';

export const Header = styled.div`
  width: 100%;
  height: 21rem;
  position: relative;
`;

export const LogoStyled = styled(Logo)`
  ${absCenter}
`;

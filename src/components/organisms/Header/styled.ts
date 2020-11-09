import styled from 'styled-components';
import { absCenter } from '../../../data/style/mixins/Mixins';
import Logo from '../../atoms/Logo';
import Menu from '../Menu';

export const Header = styled.div`
  width: 100%;
  height: 21rem;
  position: relative;
`;

export const LogoStyled = styled(Logo)`
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const MenuWrapper = styled(Menu)`
  position: absolute;
  top: 8rem;
  right: 8rem;
`;

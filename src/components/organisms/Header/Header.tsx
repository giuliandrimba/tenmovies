import React from 'react';
import { Header, LogoStyled, MenuWrapper } from './styled';
import Menu from '../Menu'

export default (props: any) => {
  return (
    <Header className={props.className}>
      <LogoStyled />
      <MenuWrapper />
    </Header>
  )
}

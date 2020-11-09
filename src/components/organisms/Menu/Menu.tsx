import React from 'react';
import {
  Link
} from "react-router-dom";
import { Nav, P, A } from './styled'

export default (props: any) => {
  return (
    <Nav className={props.className}>
        <A to="/login">
          <span></span>
          <P>Login</P>
        </A>
        <A to="/create">
          <span></span>
          <P>Create</P>
        </A>
    </Nav>
  )
}

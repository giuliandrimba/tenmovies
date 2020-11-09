import React from 'react';
import {
  Link
} from "react-router-dom";
import { Nav, P, A, Circle } from './styled'

export default (props: any) => {
  return (
    <Nav className={props.className}>
        <A to="/login">
          <Circle></Circle>
          <P>Login</P>
        </A>
        <A to="/create">
          <Circle></Circle>
          <P>Create</P>
        </A>
    </Nav>
  )
}

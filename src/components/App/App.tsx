import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import img from 'Assets/image/alfa.jpg'
import { GlobalStyle, Logo } from './styled';
import Router from '../../routes/Router'

export type AppContextType = {};

export const AppContext = React.createContext<AppContextType>({});

export default () => {
  const context = {};
  return (
    <AppContext.Provider value={context}>
      <GlobalStyle />
      <h1>Alfa APP</h1>
      <Logo src={img} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

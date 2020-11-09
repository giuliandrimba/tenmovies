import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, Logo } from './styled';
import Router from '../../routes/Router'
import { ThemeProvider } from 'styled-components';
import {defaultTheme} from '../../data/style/theme/default'
import Header from '../organisms/Header';

export type AppContextType = {};

export const AppContext = React.createContext<AppContextType>({});

export default () => {
  const context = {};
  const theme: any = defaultTheme;
  return (
    <BrowserRouter>
      <AppContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <Header />
            <Router />
        </ThemeProvider>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

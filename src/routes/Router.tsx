import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import { Container } from './styled';

export default () => {
  return (
    <Switch>
      {routes.map((route: any, i) => (
        <Route
          exact
          path={route.path}
          key={i}
          render={props => (
            <Container>
              <route.component {...props} />
            </Container>
          )}
        />
      ))}
    </Switch>
  )
}

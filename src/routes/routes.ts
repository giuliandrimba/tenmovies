import { HomePage } from 'src/components/pages/HomePage/HomePage';
import { LoginPage } from 'src/components/pages/LoginPage/Loginpage';
import { CreatePage } from 'src/components/pages/CreatePage/CreatePage';

export const RouteNames = {
  HOME: 'home',
  LOGIN: 'login',
  CREATE: 'create',
};

export default [
  {
    path: `/`,
    component: HomePage,
  },
  {
    path: `/login`,
    component: LoginPage,
  },
  {
    path: `/create`,
    component: CreatePage,
  },
];

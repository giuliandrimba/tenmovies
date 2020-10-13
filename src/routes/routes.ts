import { HomePage } from 'src/components/pages/HomePage/HomePage'
import { LoginPage } from 'src/components/pages/LoginPage/Loginpage'

export const RouteNames = {
  HOME: 'home',
  LOGIN: 'login'
}

export default [
  {
    path: `/`,
    component: HomePage
  },
  {
    path: `/${RouteNames.LOGIN}`,
    component: LoginPage
  }
]

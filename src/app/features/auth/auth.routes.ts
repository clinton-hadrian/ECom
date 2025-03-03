import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Spark - Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Spark - Register',
  },
  {
    path: 'resetPassword',
    component: ForgotPasswordComponent,
    title: 'Spark - Reset Password',
  },
  {
    path: 'userLogin',
    component: UserLoginComponent,
    title: 'Spark - User Login',
  },
];

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Spark - Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Login',
  },
  {
    path: 'resetPassword',
    component: ForgotPasswordComponent,
    title: 'Password reset',
  },
];

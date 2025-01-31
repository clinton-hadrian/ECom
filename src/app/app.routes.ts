import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { HomeLayoutComponent } from './core/layouts/home-layout/home-layout.component';
import { homeRoutes } from './features/home/home.routes';
import { tokenGuard } from './core/guards/token.guard';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { authRoutes } from './features/auth/auth.routes';
import { catalogRoutes } from './features/catalog/catalog.routes';
import { productDetailRoutes } from './features/product-details/product-details.routes';
import { cartRoutes } from './features/cart/cart.routes';
import { AboutComponent } from './shared/components/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [tokenGuard],
    children: [
      ...authRoutes,
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    canActivate: [tokenGuard],
    children: [
      ...homeRoutes,
      ...catalogRoutes,
      ...productDetailRoutes,
      ...cartRoutes,
      { path: 'about', component: AboutComponent, title: 'About' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

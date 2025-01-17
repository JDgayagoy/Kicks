import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'landing',
    loadComponent: () => import('./landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: 'featured',
    loadComponent: () => import('./featured/featured.page').then( m => m.FeaturedPage)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout/checkout.page').then( m => m.CheckoutPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'inbox',
    loadComponent: () => import('./inbox/inbox.page').then( m => m.InboxPage)
  },
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders.page').then( m => m.OrdersPage)
  },
  {
    path: 'product',
    loadComponent: () => import('./product/product.page').then( m => m.ProductPage)
  },
  {
    path: 'product1',
    loadComponent: () => import('./product1/product1.page').then( m => m.Product1Page)
  },
  {
    path: 'product2',
    loadComponent: () => import('./product2/product2.page').then( m => m.Product2Page)
  },
  {
    path: 'product3',
    loadComponent: () => import('./product3/product3.page').then( m => m.Product3Page)
  },
  {
    path: 'product4',
    loadComponent: () => import('./product4/product4.page').then( m => m.Product4Page)
  },
  {
    path: 'product5',
    loadComponent: () => import('./product5/product5.page').then( m => m.Product5Page)
  }
];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SingleCountryComponent } from './components/single-country/single-country.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';

export const routes: Routes = [
  // no layout routes
  // {
  //   path: '',
  //   redirectTo: '/countries',

  //   pathMatch: 'full',
  // },
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: '/countries',
  // },

  // Site routes goes here
  {
    path: '',
    component: SiteLayoutComponent,

    children: [
      {
        path: 'countries',
        component: CountriesComponent,
      },

      {
        path: 'single-country/:name',
        component: SingleCountryComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'verify-email-address',
        component: VerifyEmailComponent,
      },
    ],
  },
];

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { CountriesComponent } from './components/countries/countries.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { SingleCountryComponent } from './components/single-country/single-country.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './_pipe/search.pipe';
import { HighlightifyPipe } from './_pipe/highlightify.pipe';
import { AuthService } from './_services/auth.service';
import { SearchService } from './_services/search.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { appConfig } from './app.config';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MaterialModule } from './material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    CountriesComponent,
    ToolbarComponent,
    CardComponent,
    SingleCountryComponent,
    SearchComponent,
    SearchPipe,
    HighlightifyPipe,
    SiteLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLinkActive, // add here if necessasry
    RouterOutlet, // add here if necessasry
    RouterLink, // add here if necessasry
    appConfig.providers,
    MaterialModule,
  ],

  providers: [AuthService, SearchService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModuleModule {}

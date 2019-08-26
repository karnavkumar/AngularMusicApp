import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicModule } from './public/public.module';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

const fbLoginOptions: LoginOpt = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
}; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("232925470714-t2g3h1t3dejhrkt6vmh3flfdo61dfnnk.apps.googleusercontent.com", googleLoginOptions)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2607363319298034", fbLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PublicModule,
    MatPasswordStrengthModule,
    SocialLoginModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

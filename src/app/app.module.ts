import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlansComponent } from './plans/plans.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './api/user.service';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FeaturesComponent } from './features/features.component';
import { RequestSignupComponent } from './request-signup/request-signup.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PlansComponent,
    NotFoundComponent,
    LoginComponent,
    LoggedInComponent,
    AboutUsComponent,
    HowItWorksComponent,
    FeaturesComponent,
    RequestSignupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
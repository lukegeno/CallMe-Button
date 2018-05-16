import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlansComponent } from './plans/plans.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { FeaturesComponent } from './features/features.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RequestSignupComponent } from './request-signup/request-signup.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'plans', component: PlansComponent},
  { path: 'login', component: LoginComponent },
  { path: 'main', component: LoggedInComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'how-it-works', component: HowItWorksComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'signup', component: RequestSignupComponent},

  { path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }

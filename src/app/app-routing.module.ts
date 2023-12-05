import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './authentication/signup-page/signup-page.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PastRequestComponent } from './home-page/past-request/past-request.component';
import { RequestComponent } from './request/request.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NextedRouteComponent } from './nexted-route/nexted-route.component';
// import { OneSignalComponent } from './one-signal/one-signal.component';
// import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  {path:"", component:SignupPageComponent},
  {path:"login", component:LoginPageComponent},
  {path:"home-page", component:HomePageComponent},
  {path:"items", component:NextedRouteComponent, children:[
  {path:"view-all", component:PastRequestComponent},
  {path:"request", component:RequestComponent},
  ]},
  // {path:"pushnotification",component:OneSignalComponent},
  {path:"404", component:ErrorPageComponent},
  {path:"**",redirectTo:"/404"},
  // {path:"sidebar",component:SideBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

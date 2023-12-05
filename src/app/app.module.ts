import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './authentication/signup-page/signup-page.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { NavbarComponent } from './nav-bar/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { PastRequestComponent } from './home-page/past-request/past-request.component';
import { PastRequestComponent } from './home-page/past-request/past-request.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { RequestComponent } from './request/request.component';
import { ListOfRequestComponent } from './list-of-request/list-of-request.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
// import { ContrastAngularComponent } from './contrast-angular/contrast-angular.component';
// import { SidebarModule } from 'ng-cdbangular';
import { AltSidebarModule } from 'ng-alt-sidebar';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NextedRouteComponent } from './nexted-route/nexted-route.component';
// import { OneSignalModule } from 'onesignal-angular';
// import { NgxOneSignalModule } from 'ngx-onesignal';
// import { OnesignalNgxModule } from 'onesignal-ngx';
// import { environment } from './environment/environment';
// import { OneSignalComponent } from './one-signal/one-signal.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    NavbarComponent,
    HomePageComponent,
    PastRequestComponent,
    SearchComponent,
    AdminComponent,
    RequestComponent,
    ListOfRequestComponent,
    FooterComponent,
    ErrorPageComponent,
    SideBarComponent,
    NextedRouteComponent,
    // OneSignalComponent
    // ContrastAngularComponent,
    // SidebarModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    FileUploadModule,
    HttpClientModule,
    AltSidebarModule,
    // OnesignalNgxModule
    // NgxOneSignalModule.forRoot({
    //   appId: environment.appId,
    // }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

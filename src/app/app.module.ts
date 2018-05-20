import { MapPage } from './../pages/map/map';
import { ResultPage } from './../pages/result/result';
import { SearchingPage } from './../pages/searching/searching';
import { FormPage } from './../pages/form/form';
import { ComponentsModule } from './../components/components.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from './../pages/intro/intro';
import { RegisterPage } from './../pages/register/register';
import { DriverPage } from './../pages/driver/driver';
import { FreePage } from './../pages/free/free';
import { MatchListPage } from './../pages/match-list/match-list';
import { LoginPage } from './../pages/login/login';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarComponent } from '../components/car/car';
import { PeopleComponent } from '../components/people/people';






@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    RegisterPage,
    DriverPage,
    FreePage,
    CarComponent,
    PeopleComponent,
    MatchListPage,
    LoginPage,
    FormPage,
    SearchingPage,
    ResultPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    RegisterPage,
    DriverPage,
    FreePage,
    MatchListPage,
    LoginPage,
    FormPage,
    SearchingPage,
    ResultPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

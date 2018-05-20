import { MapPage } from './../pages/map/map';
import { SearchingPage } from './../pages/searching/searching';
import { FormPage } from './../pages/form/form';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from './../pages/intro/intro';
import { HomePage } from './../pages/home/home';
import { DriverPage } from '../pages/driver/driver';
import { FreePage } from './../pages/free/free';
import { LoginPage } from './../pages/login/login';
import { MatchListPage } from './../pages/match-list/match-list';
import { ResultPage } from '../pages/result/result';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

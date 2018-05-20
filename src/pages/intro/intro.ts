import { FormPage } from './../form/form';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, Form } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { LoginPage } from './../login/login';



/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  goToLogin(){

    this.navCtrl.push(LoginPage);

  }

  goToRegister(){

    this.navCtrl.push(FormPage);

  }

}

import { SearchingPage } from './../searching/searching';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  register = {
    login: '',
    password: '',
    startAddress: '',
    endAddress: '',
    time: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  registrer(){
    this.navCtrl.push(SearchingPage, this.register);
  }

}

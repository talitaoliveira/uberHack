import { FreePage } from './../free/free';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  current = ''

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.generate();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  generate(){

    let list = ['driver', 'rider']

    this.current = list[Math.floor(Math.random() * 2)];

  }

  confirm(current){
    this.navCtrl.push(FreePage, current);
  }

}

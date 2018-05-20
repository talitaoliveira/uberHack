import { HomePage } from './../home/home';
import { MatchListPage } from './../match-list/match-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

HomePage


/**
 * Generated class for the SearchingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searching',
  templateUrl: 'searching.html',
})
export class SearchingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    
  
  }

  ionViewDidEnter(){
    console.log('buscando')
    setTimeout(() => {
      this.navCtrl.push(MatchListPage);
    }, 1500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchingPage');
  }

  

}

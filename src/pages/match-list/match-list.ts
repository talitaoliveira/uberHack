import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MatchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match-list',
  templateUrl: 'match-list.html',
})
export class MatchListPage {

  humans: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    this.getFakeData();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchListPage');
  }

  getFakeData(){

    let humans = [
      { name: 'Fulano 1', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 2', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'You', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 4', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 5', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 6', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 7', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 8', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 9', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 10', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
    ]

    this.humans = humans;


  }

  confirm(){
    this.navCtrl.push(HomePage);
  }
}

import { ResultPage } from './../result/result';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  humans: any;
  user = { login: '', pass: '', name: 'Your Name - Registered', placa: 'KGB-8789', picture: 'https://api.randomuser.me/portraits/med/men/34.jpg', logged: true, driver: false }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.getActualList();

    let user = (this.navParams.data.name) ? this.navParams.data  : this.user;

    this.humans.push(user)

    this.humans.sort(this.compare)

  }

  getActualList(){

    const shuffled = this.getGroup().sort(() => .5 - Math.random());// shuffle  
    let selectedGroup = shuffled.slice(0,3)

    this.humans = selectedGroup;
    
    this.generateActualDriver();


  }

  generateActualDriver(){

    const shuffled = this.getGroup().sort(() => .5 - Math.random());// shuffle  
    let selectedDriver = shuffled.slice(0,1);

  }

  getGroup(){

    let humans = [
      { name: 'Fulano 1', placa: 'KFC-3020', driver: false, logged: false ,picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 2', placa: 'KFC-3020', driver: false, logged: false ,picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },      
      { name: 'Fulano 4', placa: 'KFC-3020', driver: false, logged: false ,picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 5', placa: 'KFC-3020', driver: false, logged: false ,picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 6', placa: 'KFC-3020', driver: false, logged: false ,picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 7', placa: 'KFC-3020', driver: false, logged: false ,picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 8', placa: 'KFC-3020', driver: false, logged: false ,picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 9', placa: 'KFC-3020', driver: false, logged: false ,picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
      { name: 'Fulano 10', placa: 'KFC-3020', driver: false, logged: false ,picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
    ]

    return humans;

  }


  // getFakeData(){

  //   let humans = [
  //     { name: 'Fulano 1', actualDriver: false },
  //     { name: 'Fulano 2', actualDriver: true },
  //     { name: 'Fulano 4', actualDriver: false },
  //   ]
    
  //   humans.sort(this.compare);

  //   this.humans = humans;


  // }

  compare(a,b) {
    if (a.logged)
       return -1;
    if (b.logged)
      return 1;
    return 0;
  }

  result(){
    this.navCtrl.push(ResultPage);
  }
  
  

}

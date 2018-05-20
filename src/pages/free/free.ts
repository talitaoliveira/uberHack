import { MapPage } from './../map/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the FreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-free',
  templateUrl: 'free.html',
})
export class FreePage {

  status = { type: '', description: ''  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    if( this.navParams.data == 'driver' ){
      this.getDriver();
    }else if( this.navParams.data == 'rider' ){
      this.getRider();
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FreePage');
  }

  getDriver(){
    this.status = { type: 'driver', description: 'Saindo'  }
  }

  getRider(){
    this.status = { type: 'rider', description: 'Livre'  }
  }

getMapa(){
  this.navCtrl.push(MapPage);
}
  
}

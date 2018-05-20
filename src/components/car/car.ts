import { Component } from '@angular/core';

/**
 * Generated class for the CarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'car',
  templateUrl: 'car.html'
})
export class CarComponent {

  text: string;

  constructor() {
    console.log('Hello CarComponent Component');
    this.text = 'Hello World';
  }

}

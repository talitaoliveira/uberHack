import { Component } from '@angular/core';

/**
 * Generated class for the PeopleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'people',
  templateUrl: 'people.html'
})
export class PeopleComponent {

  text: string;

  constructor() {
    console.log('Hello PeopleComponent Component');
    this.text = 'Hello World';
  }

}

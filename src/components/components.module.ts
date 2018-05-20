import { NgModule } from '@angular/core';
import { CarComponent } from './car/car';
import { PeopleComponent } from './people/people';
@NgModule({
	declarations: [CarComponent,
    PeopleComponent],
	imports: [],
	exports: [CarComponent,
    PeopleComponent]
})
export class ComponentsModule {}

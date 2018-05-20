import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverPage } from './driver';

@NgModule({
  declarations: [
    DriverPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverPage),
  ],
})
export class DriverPageModule {}

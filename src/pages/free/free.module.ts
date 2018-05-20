import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreePage } from './free';

@NgModule({
  declarations: [
    FreePage,
  ],
  imports: [
    IonicPageModule.forChild(FreePage),
  ],
})
export class FreePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchListPage } from './match-list';

@NgModule({
  declarations: [
    MatchListPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchListPage),
  ],
})
export class MatchListPageModule {}

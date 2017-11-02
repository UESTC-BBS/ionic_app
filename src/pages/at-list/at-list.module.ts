import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtListPage } from './at-list';

@NgModule({
  declarations: [
    AtListPage,
  ],
  imports: [
    IonicPageModule.forChild(AtListPage),
  ]
})
export class AtListPageModule { }

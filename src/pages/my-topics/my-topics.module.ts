import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTopicsPage } from './my-topics';

@NgModule({
  declarations: [
    MyTopicsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTopicsPage),
  ],
})
export class MyTopicsPageModule {}

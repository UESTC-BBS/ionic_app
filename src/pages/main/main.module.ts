import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { TranslateModule } from '@ngx-translate/core';
import { HotPageModule } from '../hot/hot.module'
import { PipeModule } from "../../app/filter/pipeModule";

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    TranslateModule.forChild(),
    HotPageModule,
    PipeModule.forRoot()
  ],
  entryComponents: [
    MainPage
  ]
})
export class MainPageModule { }

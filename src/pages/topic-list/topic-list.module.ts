import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicListPage } from './topic-list';
import { PipeModule } from "../../app/filter/pipeModule";

@NgModule({
  declarations: [
    TopicListPage
  ],
  imports: [
    IonicPageModule.forChild(TopicListPage),
    PipeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TopicListPage],
  providers: [

  ]
})
export class TopicListPageModule { }

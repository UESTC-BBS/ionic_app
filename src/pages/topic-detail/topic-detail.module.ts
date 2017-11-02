import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicDetailPage } from './topic-detail';
import { PipeModule } from "../../app/filter/pipeModule";
import { ListRefLoadPageModule } from "../../pages/list-ref-load/list-ref-load.module";

@NgModule({
  declarations: [
    TopicDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicDetailPage),
    PipeModule,
    ListRefLoadPageModule
  ],
  entryComponents: [
    TopicDetailPage
  ]
})
export class TopicDetailPageModule { }

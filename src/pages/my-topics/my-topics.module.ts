import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTopicsPage } from './my-topics';
import { ListRefLoadPageModule } from '../list-ref-load/list-ref-load.module';
import { TopicListPageModule } from '../topic-list/topic-list.module';

@NgModule({
  declarations: [
    MyTopicsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTopicsPage),
    TopicListPageModule,
    ListRefLoadPageModule
  ],
  entryComponents: [
    MyTopicsPage
  ]
})
export class MyTopicsPageModule { }

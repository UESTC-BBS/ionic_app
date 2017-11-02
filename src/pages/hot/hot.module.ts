import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotPage } from './hot';
import { TopicListPageModule } from '../topic-list/topic-list.module';
import { ListRefLoadPageModule } from '../list-ref-load/list-ref-load.module';
import { ForumPage } from "./forum";
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HotPage,
    ForumPage
  ],
  imports: [
    IonicPageModule.forChild(HotPage),
    IonicPageModule.forChild(ForumPage),
    TopicListPageModule,
    ListRefLoadPageModule,
    TranslateModule.forRoot()
  ],
  entryComponents: [
    HotPage,
    ForumPage
    //TopicListPageModule
  ]
})
export class HotPageModule { }

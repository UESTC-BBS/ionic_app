import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTopicPage } from './add-topic';

@NgModule({
  declarations: [
    AddTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTopicPage),
  ],
  entryComponents: [
    AddTopicPage
  ]
})
export class AddTopicPageModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTopicPage } from './add-topic';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { UploadService } from '../../app/service/Upload';
import { AtListPageModule } from '../at-list/at-list.module';


@NgModule({
  declarations: [
    AddTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTopicPage),
    AtListPageModule
  ],
  entryComponents: [
    AddTopicPage
  ],
  providers: [
    FileTransfer,
    File,
    UploadService
  ]
})
export class AddTopicPageModule { }

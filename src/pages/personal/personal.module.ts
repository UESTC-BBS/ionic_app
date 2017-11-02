import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalPage } from './personal';
import { TranslateModule } from '@ngx-translate/core';
import { AboutPageModule } from '../about/about.module';


@NgModule({
  declarations: [
    PersonalPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalPage),
    TranslateModule.forRoot(),
    AboutPageModule

  ],
  entryComponents: [
    PersonalPage
  ]
})
export class PersonalPageModule { }

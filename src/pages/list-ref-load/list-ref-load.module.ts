import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListRefLoadPage } from './list-ref-load';

@NgModule({
  declarations: [
    ListRefLoadPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicPageModule.forChild(ListRefLoadPage),
  ],
  entryComponents: [

  ],
  exports: [ListRefLoadPage],
})
export class ListRefLoadPageModule { }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { HotPage } from '../hot/hot'
import { PersonalPage } from '../personal/personal'
import { ForumPage } from '../hot//forum'

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  hot = HotPage
  personal = PersonalPage
  forum = ForumPage
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService) {
    console.log("main");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}

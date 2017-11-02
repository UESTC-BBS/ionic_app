import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AtListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-at-list',
  templateUrl: 'at-list.html',
})
export class AtListPage {

  atUserList = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.atUserList);
    this.atUserList = navParams.data.atUserList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtListPage');
  }

  check(index, user) {
    this.navParams.data.eventEmitter.emit({ index: index, user: user });
  }

}

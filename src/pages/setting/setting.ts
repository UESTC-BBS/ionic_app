import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from "../../app/service/loginService";
import { Const } from "../../app/service/VALUES";
import { LoadingService } from '../../app/service/loadingService';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingService,
    public storage: Storage,
    public loginService: LoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  logout() {
    this.loginService.logout(Const.user.username).then((value) => {
      this.storage.set('user', null).then((data) => {
        this.loading.basicAlert(value.errcode);
        this.navCtrl.pop();
      });
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { LoginService } from '../../app/service/loginService';
import { LoadingService } from '../../app/service/loadingService';

/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController,
    public loadingServ: LoadingService,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public service: LoginService) {
    this.loadingServ.getLoading().present();
    this.presentLoadingText();
  }

  presentLoadingText() {
    const loading = this.loadingCtrl.create({
      content: 'Loading ...'
    });

    loading.present();


    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
  ionViewDidLoad() {

  }

}

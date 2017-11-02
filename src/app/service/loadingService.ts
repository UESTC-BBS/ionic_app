import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AlertController, PopoverController } from 'ionic-angular';
import { LoadingPage } from "../../pages/loading/loading";


@Injectable()
export class LoadingService {
    constructor(public alertCtrl: AlertController,
        public popoverCtrl: PopoverController,
        public loadingCtrl: LoadingController) {
    }
    presentLoading(duration: number, tip: string = '加载中...') {
        let loader = this.loadingCtrl.create({
            content: tip,
            duration: duration
        });
        loader.present();
    }
    basicAlert(msg: string, title: string = "提示") {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    }

    getLoading() {
        let options = {
            showBackdrop: true,
            enableBackdropDismiss: false
        }
        return this.popoverCtrl.create(LoadingPage, {}, options);
    }
}
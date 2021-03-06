import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { LoadingService } from '../../app/service/loadingService';
import { Storage } from "@ionic/storage";
import { LoginService } from '../../app/service/loginService';
import { AlertController } from 'ionic-angular';
import { Const } from "../../app/service/VALUES";
import { MyTopicsPage } from "../my-topics/my-topics";
import { SettingPage } from "../../pages/setting/setting";
import { AboutPage } from '../../pages/about/about';
/**
 * Generated class for the PersonalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  isLogin = false;
  user: any = null;
  username = ''
  password = ''

  constructor(public navCtrl: NavController,
    public translate: TranslateService,
    public navParams: NavParams,
    public loginService: LoginService,
    public loading: LoadingService,
    public alert: AlertController,
    public storage: Storage) {
    console.log("person");
    this.user = this.storage.get('user').then((data) => {
      if (data) {
        this.user = data;
        this.isLogin = true
      }
    });

  }

  toAbout() {
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }


  toMyTopics() {
    if (Const.user) {
      this.navCtrl.push(MyTopicsPage, { type: "topic" });
    } else {
      this.loading.basicAlert('还没有登陆');
    }
  }

  toMyReplies() {
    if (Const.user) {
      this.navCtrl.push(MyTopicsPage, { type: "reply" });
    } else {
      this.loading.basicAlert('还没有登陆');
    }
  }

  toSetting() {
    this.navCtrl.push(SettingPage);
  }

  login() {
    let prompt = this.alert.create({
      title: '登录',
      inputs: [
        {
          name: 'username',
          placeholder: '用户名'
        },
        {
          name: 'password',
          placeholder: '密码'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '登录',
          handler: data => {
            this.loading.presentLoading(1000, '登录中...');
            this.loginService.login(data.username, data.password).then(
              (user: any) => {
                user.achievement = '';
                user.creditShowList.forEach(element => {
                  user.achievement = user.achievement.concat(`${element.title}:${element.data}  `);
                });
                console.log(user);
                this.storage.set('user', user);
                this.user = user;
                this.isLogin = true;
                Const.user = user;
              }
            ).catch(() => { this.loading.basicAlert('登录失败') })
          }
        }
      ]
    });
    prompt.present();
  }

}

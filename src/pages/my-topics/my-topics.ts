import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Const } from "../../app/service/VALUES";
import { TopicService } from "../../app/service/topicService";

/**
 * Generated class for the MyTopicsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-topics',
  templateUrl: 'my-topics.html',
})
export class MyTopicsPage {

  public topicList = []
  page = 1
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public topicService: TopicService) {
    topicService.getTopicByUser(Const.user.uid, this.page).then((result) => {
      this.topicList = result.list;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTopicsPage');
  }

}

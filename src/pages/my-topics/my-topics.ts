import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Const } from "../../app/service/VALUES";
import { TopicService } from "../../app/service/topicService";
import { LoadingService } from '../../app/service/loadingService';

@IonicPage()
@Component({
  selector: 'page-my-topics',
  templateUrl: 'my-topics.html',
})
export class MyTopicsPage {

  public topicList = []
  page = 1
  getHttpData
  count = 0
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingService,
    public topicService: TopicService) {
    if (navParams.data.type == 'topic') {
      this.getHttpData = (uid = Const.user.uid, page) => {
        return this.topicService.getTopicByUser(uid, page);
      }
    } else {
      this.getHttpData = (uid = Const.user.uid, page) => {
        return this.topicService.getReplyByUser(uid, page);
      }
    }
    debugger
    this.getHttpData(Const.user.uid, this.page).then((result) => {
      this.topicList = result.list;
      this.count = result.sum;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTopicsPage');
  }

  getData(infinite) {
    if (this.topicList.length == this.count) {
      if (infinite != null) {
        infinite.complete();
      }
      return;
    }
    this.page++;
    this.getHttpData(Const.user.uid, this.page).then((result) => {
      this.topicList = this.topicList.concat(result.list);
      this.count = result.sum;
      if (infinite != null) {
        infinite.complete();
      }
    });
  }

  refreshData(refresher) {
    this.count = 0;
    this.page = 1;
    this.getHttpData(Const.user.uid, this.page).then((result) => {
      this.topicList = result.list;
      this.count = result.sum;
      console.log(result);
      if (refresher != null) {
        refresher.complete();
      }
    });
  }

}

import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopicDetailPage } from "../topic-detail/topic-detail";
import { AlertController } from 'ionic-angular';
import { LoadingService } from "../../app/service/loadingService";
import { ReplyService } from "../../app/service/replyService";
import { TopicService } from "../../app/service/topicService";
import { Content } from "../../app/models/ReplyToAdd";
import { AddTopicPage } from "../add-topic/add-topic";
import { Const } from "../../app/service/VALUES";

/**
 * Generated class for the TopicListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topic-list',
  templateUrl: 'topic-list.html',
})
export class TopicListPage {

  @Input('topicList')
  public topicList: Array<any> = new Array<any>();


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public topicService: TopicService,
    public replyService: ReplyService,
    public loading: LoadingService,
    public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicListPage');
  }

  goTopicDetail(topicId) {
    if (!Const.user) {
      this.loading.basicAlert("请先登录")
      return
    }
    this.navCtrl.push(TopicDetailPage, { topicId: topicId })
  }

  support(topic) {
    if (!Const.user) {
      this.loading.basicAlert("请先登录")
      return
    }
    this.topicService.support(topic.topic_id).then((result) => {
      if (result) {
        debugger
        topic.recommendAdd = topic.recommendAdd + 1;
        console.log(topic);
      }
    });
  }

  reply(topic) {
    if (!Const.user) {
      this.loading.basicAlert("请先登录")
      return
    }
    let prompt = this.alert.create({
      title: '评论',
      inputs: [
        {
          name: 'reply',
          placeholder: '回复内容……'
        }
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '发送',
          handler: data => {
            let msgs: Array<Content> = []
            msgs.push(new Content(0, data.reply));
            this.replyService.replyTopic(topic.topic_id, msgs).then(
              (result) => {
                if (result) {
                  this.loading.basicAlert("回复成功")
                  topic.replies += 1;
                }
              }
            ).catch((e) => { this.loading.basicAlert(e) })
          }
        }
      ]
    });
    prompt.present();
  }
  addClick() {
    this.navCtrl.push(AddTopicPage);
  }
}

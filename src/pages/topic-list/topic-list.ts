import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopicDetailPage } from "../topic-detail/topic-detail";
import { AlertController } from 'ionic-angular';
import { LoadingService } from "../../app/service/loadingService";
import { ReplyService } from "../../app/service/replyService";
import { Content } from "../../app/models/ReplyToAdd";
import { AddTopicPage } from "../add-topic/add-topic";

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
    public replyService: ReplyService,
    public loading: LoadingService,
    public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicListPage');
  }

  goTopicDetail(topicId) {
    this.navCtrl.push(TopicDetailPage, { topicId: topicId })
  }

  reply(topicId) {
    let prompt = this.alert.create({
      title: '评论',
      inputs: [
        {
          name: 'reply',
          placeholder: '用户名'
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
            this.replyService.replyTopic(topicId, msgs).then(
              (result) => {
                this.loading.basicAlert(result.errcode)
              }
            ).catch(() => { this.loading.basicAlert('回复失败') })
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

import { Component } from '@angular/core';
import { PostService } from "../../app/service/postService";
import { IonicPage, NavController, NavParams, AlertController, PopoverController, LoadingController } from 'ionic-angular';
import { TopicDetail } from "../../app/models/TopicDetail";
import { ReplyService } from '../../app/service/replyService';
import { LoadingService } from '../../app/service/loadingService';
import { Content } from "../../app/models/ReplyToAdd";

/**
 * Generated class for the TopicDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topic-detail',
  templateUrl: 'topic-detail.html',
})
export class TopicDetailPage {
  page = 1
  topicDetail = new TopicDetail()
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingService,
    public replyService: ReplyService,
    public alert: AlertController,
    public popoverCtrl: PopoverController,
    public postService: PostService) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicDetailPage');
  }
  getParse(s) {
    var index = s.search(/\n/);

    return {
      head: s.substring(0, index),
      content: s.substring(index + 1, s.length)
    }
  }
  parseContent(s) {
    var t = s.replace(/\[mobcent_phiz=/, '<img src="').replace(/\]/, '">')
    return t;
  }
  replyComment(replyId = 0) {
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
            this.replyService.replyPost(this.topicDetail.topic.topic_id, replyId, msgs).then(
              (result) => {
                if (result) {
                  this.loading.basicAlert("回复成功")
                  this.getData();
                }
              }
            ).catch((e) => { this.loading.basicAlert(e) })
          }
        }
      ]
    });
    prompt.present();
  }

  showPopover() {
    // let popover = this.popoverCtrl.create(LoginPage, { xxlogin: this.xxlogin });
    // popover.present({
    //   ev: { ss: 1 }
    // });
  }

  getData(event = null) {

    this.postService.getPost(this.page, this.navParams.data.topicId).then((topic) => {
      console.log(topic);
      this.page = 1;
      this.topicDetail = topic;
      if (event != null) {
        event.complete();
      }
    });
  }

  getMoreData(event) {
    if (this.topicDetail.list.length >= this.topicDetail.topic.replies) {
      event.complete();
      return;
    }
    this.page++;
    this.postService.getPost(this.page, this.topicDetail.topic.topic_id)
      .then((data) => {
        event.complete();
        this.topicDetail.list = this.topicDetail.list.concat(data.list);
      })
      .catch(() => { event.complete(); })
  }

}

import { Component, EventEmitter } from '@angular/core';
import { ForumService } from "../../app/service/forumListService";
import { LoadingService } from "../../app/service/loadingService";
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { UploadService } from '../../app/service/Upload';
import { TopicService } from '../../app/service/topicService';
import { TopicToAdd, Content } from '../../app/models/TopicToAdd';
import { Const } from '../../app/service/VALUES';
import { Storage } from "@ionic/storage";
import { AtListPage } from '../at-list/at-list';





/**
 * Generated class for the AddTopicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-topic',
  templateUrl: 'add-topic.html',
})
export class AddTopicPage {


  field1: any = {};
  field2: any = {};
  fields: Array<any>;
  topic: TopicToAdd = new TopicToAdd();
  textContent = '';
  atedUserList = [];
  types = [{
    classificationType_id: 0,
    classificationType_name: "选择标签"
  }];
  atCheckedEvent: EventEmitter<any> = new EventEmitter<any>();
  imgs: Array<string> = []
  constructor(public navCtrl: NavController,
    public fileChooser: FileChooser,
    public forumService: ForumService,
    public popoverCtrl: PopoverController,
    public loading: LoadingService,
    public navParams: NavParams,
    public topicService: TopicService,
    public storage: Storage,
    public fileUpload: UploadService
  ) {
    console.log('constructor AddTopicPage');
    forumService.getAllForumList().then((data) => {
      this.fields = data;
      this.field1 = data[0];
      this.field2 = this.field1.board_list[0];
    }).catch((e) => {
      loading.basicAlert("获取板块信息出错", e);
    });

    //修改at表
    this.atCheckedEvent.subscribe((event) => {
      console.log(event);
      this.atedUserList[event.index].checked = event.user.checked ? false : true;
      console.log(this.atedUserList);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTopicPage');
  }

  change() {
    this.field2 = this.field1.board_list[0];
  }

  change2() {
    this.topicService.getTopicType(this.field2.board_id)
      .then((result) => {
        this.topic.body.json.typeId = result[0].classificationType_id;
        this.types = result;
      });
  }

  openFile() {
    console.log("openfile")
    this.fileChooser.open()
      .then(uri => {
        this.fileUpload.upload(uri).then((result) => {
          this.imgs.push(result);
        })
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

  getAtUsers(event) {
    if (Const.atList) {
      console.log(Const.atList);
      this.atedUserList = Const.atList;
      console.log(this.atedUserList);
      this.showAtUserpage(event);
    } else {
      this.topicService.getAtUser()
        .then((list) => {
          console.log(list);
          list.forEach((item) => {
            item.checked = false;
          })
          this.atedUserList = list;
          Const.atList = list;
          this.showAtUserpage(event);
        })
    }

  }

  showAtUserpage(event) {

    let popover = this.popoverCtrl.create(AtListPage, { atUserList: this.atedUserList, eventEmitter: this.atCheckedEvent });
    popover.present({
      ev: event
    });
  }

  submit_topic() {
    this.atCheckedEvent.forEach((item) => {
      this.textContent.concat(`@${item.name}`);
    })
    let infoList: Array<Content> = []
    this.imgs.forEach((item) => {
      infoList.push(new Content(1, item));
    });
    infoList.push(new Content(0, this.textContent));
    this.topic.body.json.content = JSON.stringify(infoList);
    this.topic.body.json.fid = this.field2.board_id;
    this.topicService.sendTopic(this.topic)
      .then(() => {
        this.loading.basicAlert("发帖成功");
        this.navCtrl.pop();
      })
  }

}

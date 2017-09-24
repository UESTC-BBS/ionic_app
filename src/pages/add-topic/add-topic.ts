import { Component } from '@angular/core';
import { ForumService } from "../../app/service/forumListService";
import { LoadingService } from "../../app/service/loadingService";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';

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
  constructor(public navCtrl: NavController,
    public fileChooser: FileChooser,
    public forumService: ForumService,
    public loading: LoadingService,
    public navParams: NavParams,
  ) {
    forumService.getAllForumList().then((data) => {
      console.log(data)
      this.fields = data;
      this.field1 = data[0];
      console.log(this.field1);
      this.field2 = this.field1.board_list[0];
      console.log('field2', this.field2);
    }).catch((e) => {
      loading.basicAlert("获取板块信息出错", e);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTopicPage');
  }

  change() {
    this.field2 = this.field1.board_list[0];
  }

  change2() {
    console.log('field2', this.field2);
    console.log('fields', this.fields);
  }

  openFile() {
    this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));
  }

}

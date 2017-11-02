import { Injectable } from '@angular/core';
import { CommonHttpService } from "./commonHttpService";
import { Apis } from "./Apis";
import { LoadingController } from 'ionic-angular';


@Injectable()
export class TopicService {
    loading
    constructor(public commonService: CommonHttpService,
        public loadingCtrl: LoadingController) {
        this.loading = this.loadingCtrl.create({
            content: 'Loading ...'
        });
    }

    private getTopic(paraList, api = Apis.getTopicList) {
        this.loading.present();
        let promise = this.commonService.commonPost(api, paraList)
            .then((result) => {
                this.loading.dismiss();
                return { sum: result.total_num, list: result.list }
            }).catch(() => {
                this.loading.dismiss();
                return null;
            });;
        return promise;
    }

    getHotTopic(page) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        return this.getTopic(paraList);
    }

    getNewTopics = function (page) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        paraList.push({ name: 'sortby', value: 'new' });
        return this.getTopic(paraList);
    }



    getTopicByBoard(boardId, page) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        paraList.push({ name: 'boardId', value: boardId });
        return this.getTopic(paraList);
    }

    getTopicType(boardId) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: '1' });
        paraList.push({ name: 'pageSize', value: '1' });
        paraList.push({ name: 'boardId', value: boardId });
        return this.commonService.commonPost(Apis.getTopicList, paraList).then(
            (result) => {
                return result.classificationType_list;
            }
        );
    }

    getTopicByUser(uid, page) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        paraList.push({ name: 'uid', value: uid });
        return this.getTopic(paraList, Apis.userTopicList);
    }

    getReplyByUser(uid, page) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        paraList.push({ name: 'uid', value: uid });
        return this.getTopic(paraList, Apis.userReplyList);
    }

    support(tid) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'tid', value: tid });
        return this.commonService.commonPost(Apis.support, paraList);
    }

    sendTopic(topic) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'json', value: JSON.stringify(topic) });
        let promise = this.commonService.commonPost(Apis.newTopic, paraList);
        return promise;
    }

    getAtUser() {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: '1' });
        paraList.push({ name: 'pageSize', value: 100 });
        let promise = this.commonService.commonPost(Apis.atUser, paraList)
        return promise.then((result) => {
            return result.list;
        });;
    }
}
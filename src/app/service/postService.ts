import { Injectable } from '@angular/core';
import { CommonHttpService } from "./commonHttpService";
import { Apis } from "./Apis";
import { TopicDetail } from "../models/TopicDetail";
import { LoadingController } from 'ionic-angular';

@Injectable()
export class PostService {
    loading
    constructor(public commonService: CommonHttpService,
        public loadingCtrl: LoadingController) {
        this.loading = this.loadingCtrl.create({
            content: 'Loading ...'
        });
    }
    getPost(page, topicId) {
        this.loading.present();
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        paraList.push({ name: 'topicId', value: topicId });
        let promise = this.commonService.commonPost(Apis.getTopicDetail, paraList)
            .then((result) => {
                this.loading.dismiss();
                return result as TopicDetail
            }).catch(() => {
                this.loading.dismiss();
                return null;
            });
        return promise;
    }
}
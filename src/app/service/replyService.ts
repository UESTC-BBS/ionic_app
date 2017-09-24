import { Injectable } from '@angular/core';
import { CommonHttpService } from "./commonHttpService";
import { Apis } from "./Apis";
import { ReplyToAdd, Content } from "../models/ReplyToAdd";
import { Const } from "./VALUES";

@Injectable()
export class ReplyService {
    constructor(public commonService: CommonHttpService) {

    }
    replyTopic(topicId, msgList: Array<Content>) {
        let paraList: Array<any> = new Array<any>();
        let reply = new ReplyToAdd()
        reply.body.json.tid = topicId;
        reply.body.json.content = JSON.stringify(msgList);
        paraList.push({ name: 'json', value: JSON.stringify(reply) });
        if (Const.user) {
            paraList.push({ name: 'accessSecret', value: Const.user.secret });
            paraList.push({ name: 'accessToken', value: Const.user.token });
        }
        let promise = this.commonService.commonPost(Apis.reply, paraList);
        return promise;
    }

    replyPost(page, replyId) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        paraList.push({ name: 'topicId', value: replyId });
        if (Const.user) {
            paraList.push({ name: 'accessSecret', value: Const.user.secret });
            paraList.push({ name: 'accessToken', value: Const.user.token });
        }
        let promise = this.commonService.commonPost(Apis.getTopicDetail, paraList).then((result) => { return result });
        return promise;
    }
}
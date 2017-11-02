import { Injectable } from '@angular/core';
import { CommonHttpService } from "./commonHttpService";
import { Apis } from "./Apis";
import { ReplyToAdd, Content } from "../models/ReplyToAdd";

@Injectable()
export class ReplyService {
    loading
    constructor(public commonService: CommonHttpService) {

    }
    replyTopic(topicId, msgList: Array<Content>) {
        let paraList: Array<any> = new Array<any>();
        let reply = new ReplyToAdd()
        reply.body.json.tid = topicId;
        reply.body.json.content = JSON.stringify(msgList);
        paraList.push({ name: 'json', value: JSON.stringify(reply) });
        let promise = this.commonService.commonPost(Apis.reply, paraList);
        return promise;
    }

    replyPost(tid, replyId, msgList) {
        let paraList: Array<any> = new Array<any>();
        let reply = new ReplyToAdd();
        if (replyId != 0) {
            reply.body.json.isQuote = 1;
        }
        reply.body.json.tid = tid;
        reply.body.json.content = JSON.stringify(msgList);
        reply.body.json.replyId = replyId;
        paraList.push({ name: 'json', value: JSON.stringify(reply) });
        let promise = this.commonService.commonPost(Apis.reply, paraList).then((result) => { return result });
        return promise;
    }
}
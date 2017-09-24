import { Injectable } from '@angular/core';
import { CommonHttpService } from "./commonHttpService";
import { Apis } from "./Apis";
import { ReplyToAdd, Content } from "../models/ReplyToAdd";
import { Const } from "./VALUES";

@Injectable()
export class ReplyService {
    constructor(public commonService: CommonHttpService) {

    }
    uploadImg(page, replyId) {
        let paraList: Array<any> = new Array<any>();
        if (Const.user) {
            paraList.push({ name: 'accessSecret', value: Const.user.secret });
            paraList.push({ name: 'accessToken', value: Const.user.token });
        }
        let promise = this.commonService.commonPost(Apis.getTopicDetail, paraList).then((result) => { return result });
        return promise;
    }
}
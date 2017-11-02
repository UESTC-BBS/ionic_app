import { Injectable } from '@angular/core';
import { CommonHttpService } from "./commonHttpService";
import { Apis } from "./Apis";


@Injectable()
export class ForumService extends CommonHttpService {


    private getForumList(paraList: Array<any>): Promise<Array<any>> {
        let promise = super.commonPost(Apis.getForumList, paraList).then((result) => { return result.list; });
        return promise;
    }

    getForumListById(fieldId: string): Promise<Array<any>> {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'fid', value: fieldId });
        return this.getForumList(paraList);
    }

    getAllForumList(): Promise<Array<any>> {
        let paraList: Array<any> = new Array<any>();
        return this.getForumList(paraList);
    }


}
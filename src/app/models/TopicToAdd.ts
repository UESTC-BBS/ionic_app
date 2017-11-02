export class TopicToAdd {

    constructor() {
        this.body = {
            json: {
                fid: 0,
                typeId: 0,
                isAnoymous: 0,
                content: '',
                title: ''
            }
        }
    }
    body: {
        json: {
            fid: number,
            typeId: number,
            isAnoymous: number,
            content: String,
            title: string
        }
    }

    // {
    //     "body": {
    //       "json": {
    //         "fid": 123, // 发帖时指定版块。
    //         "tid": 123456, // 回复时指定帖子。
    //         "typeOption": ...,
    //         "isAnonymous": 1, // 1 表示匿名发帖。
    //         "isOnlyAuthor": 1, // 1 表示回帖仅作者可见。
    //         "typeId": 1234, // 分类。
    //         "title": "Title", // 标题。
    //         "aid": "1,2,3", // 附件 ID，逗号隔开。
    //         "content": "又是一个 JSON 字符串，格式见下面。",
    //         "location": "TODO: 格式待确认"
    //       }
    //     }
    //   }
}
export class Content {
    infor: string;
    type: number;
    constructor(type, infor) {
        this.type = type;
        this.infor = infor;
    }
}

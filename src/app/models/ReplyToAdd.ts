export class ReplyToAdd {

    constructor() {
        this.body = {
            json: {
                tid: 0,
                isAnoymous: 0,
                isQuote: 0,
                replyId: 0,
                content: ''
            }
        }
    }
    body: {
        json: {
            tid: number,
            isAnoymous: number,
            isQuote: number,
            replyId: number,
            content: String
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
    //         "isQuote": 1, 是否引用之前回复的内容。
    //         "replyId": 123456, 回复 ID（pid）。
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

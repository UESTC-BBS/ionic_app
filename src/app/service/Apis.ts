export class Apis {
  constructor() {

  }
  private static baseUrl: string = "http://bbs.uestc.edu.cn/mobcent/app/web/index.php?r="

  public static login: string = Apis.baseUrl + 'user/login'

  public static getTopicList: string = Apis.baseUrl + 'forum/topiclist'

  public static getForumList: string = Apis.baseUrl + 'forum/forumlist'

  public static getTopicDetail: string = Apis.baseUrl + 'forum/postlist'

  public static reply: string = Apis.baseUrl + 'forum/topicadmin&act=reply'

  public static addTopic: string = Apis.baseUrl + 'forum/postlist&act=new'

  public static userTopicList: string = Apis.baseUrl + 'user/topiclist&type=topic'

  public static uploadImg: string = Apis.baseUrl + 'forum/sendattachmentex&type=image&module=forum'
}

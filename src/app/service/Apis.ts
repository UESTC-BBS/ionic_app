export class Apis {
  constructor() {

  }
  //private static baseUrl: string = "http://192.168.0.102:8100/mobcent/app/web/index.php?r="

  private static baseUrl: string = "http://bbs.uestc.edu.cn/mobcent/app/web/index.php?r="

  //private static baseUrl: string = "http://localhost:8100/mobcent/app/web/index.php?r="

  public static login: string = Apis.baseUrl + 'user/login'

  public static getTopicList: string = Apis.baseUrl + 'forum/topiclist'

  public static getForumList: string = Apis.baseUrl + 'forum/forumlist'

  public static getTopicDetail: string = Apis.baseUrl + 'forum/postlist'

  public static reply: string = Apis.baseUrl + 'forum/topicadmin&act=reply'

  public static newTopic: string = Apis.baseUrl + 'forum/topicadmin&act=new'

  public static addTopic: string = Apis.baseUrl + 'forum/postlist&act=new'

  public static userTopicList: string = Apis.baseUrl + 'user/topiclist&type=topic'

  public static userReplyList: string = Apis.baseUrl + 'user/topiclist&type=reply'

  public static uploadImg: string = Apis.baseUrl + 'forum/sendattachment'

  public static support: string = Apis.baseUrl + 'forum/support'

  public static atUser: string = Apis.baseUrl + 'forum/atuserlist'
}

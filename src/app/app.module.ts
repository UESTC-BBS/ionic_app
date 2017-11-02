import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Dialogs } from "@ionic-native/dialogs";
import { FileChooser } from '@ionic-native/file-chooser';
import { LoadingPageModule } from "../pages/loading/loading.module";
//根模块
import { MyApp } from './app.component';
//页面模块
import { MainPageModule } from '../pages/main/main.module';
import { TestPageModule } from "../pages/test/test.module";
import { TopicDetailPageModule } from "../pages/topic-detail/topic-detail.module";
import { HotPageModule } from "../pages/hot/hot.module";

import { PersonalPageModule } from '../pages/personal/personal.module'
import { TopicListPageModule } from '../pages/topic-list/topic-list.module';
import { ListRefLoadPageModule } from '../pages/list-ref-load/list-ref-load.module';
import { MyTopicsPageModule } from '../pages/my-topics/my-topics.module';

import { AddTopicPageModule } from "../pages/add-topic/add-topic.module"
import { SettingPageModule } from "../pages/setting/setting.module";
//服务
import { LoginService } from './service/loginService';
import { CommonHttpService } from "./service/commonHttpService";
import { TopicService } from "./service/topicService";
import { LoadingService } from "./service/loadingService";
import { UtilsService } from "./service/utilsService"

import { ForumService } from "./service/forumListService";
import { PostService } from "./service/postService";
import { ReplyService } from "./service/replyService";
import { PipeModule } from "./filter/pipeModule";
//指令
import { MyDir } from "./directive/notnull";
//加载文字资源
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
//http module
@NgModule({
  //自定义模块，页面
  declarations: [
    MyApp,
    MyDir
  ],
  //第三方模块，类库，插件
  imports: [
    LoadingPageModule,
    SettingPageModule,
    AddTopicPageModule,
    MainPageModule,
    TopicListPageModule,
    ListRefLoadPageModule,
    MainPageModule,
    TestPageModule,
    HotPageModule,
    PersonalPageModule,
    TopicDetailPageModule,
    MyTopicsPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    PipeModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
  ],
  bootstrap: [IonicApp],//启动模块
  //入口模块
  entryComponents: [
    MyApp,
  ],
  //service模块
  providers: [
    FileChooser,
    ReplyService,
    ForumService,
    Dialogs,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginService,
    CommonHttpService,
    TopicService,
    LoadingService,
    PostService,
    UtilsService
  ]
})
export class AppModule { }

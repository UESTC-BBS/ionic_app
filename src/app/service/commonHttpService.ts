import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Reply } from "../models/Reply"
import { Storage } from "@ionic/storage";
import { Const } from "./VALUES";
import { LoadingService } from "./loadingService";
import 'rxjs/add/operator/toPromise';

/*
 Generated class for the HomeService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class CommonHttpService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });

  constructor(public http: Http,
    public loading: LoadingService,
    protected storage: Storage) {
    console.log('Hello HomeService Provider');

  }

  commonPost(url, argsList: Array<any>): Promise<any> {
    if (Const.user) {
      //argsList.push({ name: 'apphash', value: this.getAppHash() });
      argsList.push({ name: 'accessSecret', value: Const.user.secret });
      argsList.push({ name: 'accessToken', value: Const.user.token });
    }
    return this.http.post(url, this.getParaString(argsList), { headers: this.headers })
      .toPromise()
      .then(response => {
        let reply: Reply = response.json()
        if (reply.rs) {
          return reply
        } else {
          this.loading.basicAlert(`请求错误：${reply.head.errInfo}`, "错误")
          console.log(reply.head.errInfo)
        }
      }).catch(this.handleError)
  }

  private getParaString(list: Array<any>): string {
    let result = '';
    while (list.length > 0) {
      let para = list.pop()
      result = result.concat(`&${para.name}=${para.value}`);
    }
    return result.substring(1, result.length);
  }



  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}

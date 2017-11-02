import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UtilsService {

    constructor(public http: Http) {
    }

    getVersion(): Promise<String> {
        return this.http.get("http://120.77.213.75/docs/version.json").toPromise().then(data => {
            return data.json().version;
        });
    }

}

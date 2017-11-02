import { Injectable } from '@angular/core';
import { CommonHttpService } from "./commonHttpService";
import { Apis } from "./Apis";
import { Const } from "./VALUES";
import { Md5 } from "ts-md5/dist/md5";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Injectable()
export class UploadService {
    constructor(public commonService: CommonHttpService,
        public transfer: FileTransfer) {
    }

    upload(fileUri) {
        const fileTransfer: FileTransferObject = this.transfer.create();
        let options: FileUploadOptions = {
            fileName: 'high.png',
            fileKey: "uploadFile[]",
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        let url = `${Apis.uploadImg}&accessToken=${Const.user.token}&accessSecret=${Const.user.secret}&attachment={"body":{"attachment":{"isPost":1,"type":"image","name":"high.png"}}}&apphash=${this.getAppHash()}`
        console.log(fileUri);
        return fileTransfer.upload(fileUri, url, options)
            .then((data) => {
                console.log(JSON.parse(data.response).body.attachment.urlName);
                return JSON.parse(data.response).body.attachment.urlName;
            }, (err) => {
                console.log(JSON.stringify(err));
            })
    }

    private getAppHash() {
        return Md5.hashStr(String(new Date().getTime()).substring(0, 5).concat("appbyme_key")).toString().substring(8, 16);
    }
}
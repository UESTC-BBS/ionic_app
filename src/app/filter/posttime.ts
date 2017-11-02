import { Pipe } from '@angular/core';

@Pipe({
    name: 'postdate'
})
export class PostPipe {

    transform(value) {
        let DAY_MILLS: number = 86400000;
        // ES6 array destructuring
        let now = new Date();
        let num: number = parseInt(value);
        let postDate = new Date(num);
        let dateDiff = now.getTime() - postDate.getTime()
        if (dateDiff < (5 * DAY_MILLS)) {
            if (dateDiff < DAY_MILLS) {
                let hourDiff = now.getUTCHours() - postDate.getUTCHours()
                if (hourDiff < 1) {
                    let minDiff = now.getUTCMinutes() - postDate.getUTCMinutes()
                    if (minDiff == 0) return "刚刚";
                    return `${minDiff} 分钟前`
                }
                return `${hourDiff} 小时前`
            }
            return `${Math.floor(dateDiff / DAY_MILLS)} 天前`
        }
        return postDate.toLocaleDateString();
    }

}
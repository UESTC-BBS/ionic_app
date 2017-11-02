export class Attac {
    body: {
        attachment: {
            isPost: number,
            type: string,
            name: string
        }
    }
    constructor() {
        this.body = {
            attachment: {
                isPost: 1,
                type: 'image',
                name: ''
            }
        }
    }
}
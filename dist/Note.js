export class Note {
    constructor(title, body) {
        this.title = title;
        this.body = body;
        this.id = Math.random();
    }
}

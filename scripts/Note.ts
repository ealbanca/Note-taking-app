export class Note {
    public id: number;
    public title: string;
    public body: string;

    constructor(title: string, body: string) {
        this.title = title;
        this.body = body;
        this.id = Math.random();
    }
}
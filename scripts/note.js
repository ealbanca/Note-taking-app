"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
var Note = /** @class */ (function () {
    function Note(title, body) {
        this.title = title;
        this.body = body;
        this.id = Math.random();
    }
    return Note;
}());
exports.Note = Note;

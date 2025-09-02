export class User {
    username;
    following;
    constructor(username, following = new Set()) {
        this.username = username;
        this.following = following;
    }
}
export class Post {
    author;
    content;
    timestamp;
    constructor(author, content, timestamp = new Date()) {
        this.author = author;
        this.content = content;
        this.timestamp = timestamp;
    }
}

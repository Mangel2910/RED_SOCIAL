export class User {
    constructor(
        public username: string,
        public following: Set<string> = new Set()
    ) {}
}

export class Post {
    constructor(
        public author: string,
        public content: string,
        public timestamp: Date = new Date()
    ) {}
}

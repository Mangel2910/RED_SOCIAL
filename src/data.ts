import { User, Post } from './models.js';

export const users: Map<string, User> = new Map();
export const posts: Post[] = [];

export let currentUser: User | null = null;

export function loginUser(user: User) {
    currentUser = user;
}

export function logoutUser() {
    currentUser = null;
}

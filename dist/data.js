import { User, Post } from './models.js';
export const users = new Map();
export const posts = [];
export let currentUser = null;
export function loginUser(user) {
    currentUser = user;
}
export function logoutUser() {
    currentUser = null;
}

import { users, posts, currentUser, loginUser, logoutUser } from './data.js';
import { User, Post } from './models.js';
export function createUser(username) {
    if (users.has(username))
        return '❌ Usuario ya existe.';
    const user = new User(username);
    users.set(username, user);
    return '✅ Usuario creado.';
}
export function login(username) {
    const user = users.get(username);
    if (!user)
        return '❌ Usuario no encontrado.';
    loginUser(user);
    return `🔓 Sesión iniciada como ${username}.`;
}
export function logout() {
    logoutUser();
    return '🔒 Sesión cerrada.';
}
export function postMessage(content) {
    if (!currentUser)
        return '❌ Debes iniciar sesión.';
    posts.push(new Post(currentUser.username, content));
    return '📝 Publicación realizada.';
}
export function listPosts() {
    return posts.map(p => `📣 [${p.author}] ${p.content} (${p.timestamp.toLocaleTimeString()})`).join('\n') || 'Sin publicaciones.';
}
export function listUsers() {
    return [...users.keys()].join(', ') || 'Sin usuarios.';
}
export function followUser(username) {
    if (!currentUser)
        return '❌ Debes iniciar sesión.';
    if (!users.has(username))
        return '❌ Usuario no encontrado.';
    if (username === currentUser.username)
        return '🙃 No puedes seguirte a ti mismo.';
    currentUser.following.add(username);
    return `✅ Sigues a ${username}.`;
}
export function showTimeline() {
    if (!currentUser)
        return '❌ Debes iniciar sesión.';
    const followed = currentUser.following;
    const timeline = posts
        .filter(p => followed.has(p.author))
        .map(p => `📰 [${p.author}] ${p.content} (${p.timestamp.toLocaleTimeString()})`);
    return timeline.join('\n') || 'Sin publicaciones en tu timeline.';
}

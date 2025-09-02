import * as readlineSync from 'readline-sync';
import * as actions from './actions.js';



export function showMenu() {
    console.log(`
======== 🌐 Minimal Social ========

1. 👨‍💼 Crear usuario
2. 📂 Iniciar sesión
3. 🔐 Cerrar sesión
4. 📩 Publicar mensaje
5. 🧾 Ver publicaciones
6. 🔎 Ver usuarios
7. 🤝 Seguir usuario
8.  ❗ Ver timeline
0. ❌ Salir
`);
}

export function handleInput(): boolean {
    const choice = readlineSync.question('Selecciona una opción: ');

    switch (choice) {
        case '1':
            const newUser = readlineSync.question('Nombre de usuario: ');
            console.log(actions.createUser(newUser));
            break;
        case '2':
            const loginUser = readlineSync.question('Usuario: ');
            console.log(actions.login(loginUser));
            break;
        case '3':
            console.log(actions.logout());
            break;
        case '4':
            const msg = readlineSync.question('Escribe tu mensaje: ');
            console.log(actions.postMessage(msg));
            break;
        case '5':
            console.log(actions.listPosts());
            break;
        case '6':
            console.log('👥 Usuarios registrados:');
            console.log(actions.listUsers());
            break;
        case '7':
            const toFollow = readlineSync.question('Usuario a seguir: ');
            console.log(actions.followUser(toFollow));
            break;
        case '8':
            console.log('🗞️ Timeline:');
            console.log(actions.showTimeline());
            break;
        case '0':
            console.log('👋 ¡Hasta luego!');
            return false;
        default:
            console.log('❓ Opción inválida.');
    }

    readlineSync.question('\nPresiona ENTER para continuar...');
    return true;
}

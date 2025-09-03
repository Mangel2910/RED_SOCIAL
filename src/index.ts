// este es el index del programa 

import { showMenu, handleInput } from './ui.js';


function main() {
    let running = true;
    while (running) {
        console.clear();
        showMenu();
        running = handleInput();
    }
}

main();

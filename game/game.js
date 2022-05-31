import { logout } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');

console.log('hello from game.js');

logoutButton.addEventListener('click', async () => {
    await logout();
});
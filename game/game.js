import { logout, createPlayerData } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');
// const deleteAccount = document.getElementById('delete-data');
const formEl = document.getElementById('form');


logoutButton.addEventListener('click', async () => {
    await logout();
});

// deleteAccount.addEventListener('click', async () => {
//     await removeData();

// });

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(formEl);
    console.log(form);
    await createPlayerData({ user_name: form.get('username-input'), user_score: form.get('test') });
});

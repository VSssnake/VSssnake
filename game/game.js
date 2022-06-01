import { logout, createPlayerData } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');
// const deleteAccount = document.getElementById('delete-data');
const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score-count');


logoutButton.addEventListener('click', async () => {
    await logout();
});

// deleteAccount.addEventListener('click', async () => {
//     await removeData();

// });

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(formEl);
    // this includes a test input
    await createPlayerData({ user_name: form.get('username-input'), user_score: form.get('test') });
});

//  -grab score-counter 
// -let state
// -render function for prompt div
// -on document event handler
// -if user input = answer, state++, alert 'u got it right' else, return alert 'ur wrong'


let score = 0;


function startGame() {
    document.addEventListener('keydown', event => {
        if (event.metaKey && event.code === 'KeyX') {
            alert("you commanded ⌘X to cut a line!");
            scoreEl.textContent = score;
            score++;
        } else {
            alert('try again you worm');
        }
    });
    
}

startGame();
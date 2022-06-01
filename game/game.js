import { logout, createPlayerData } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');
// const deleteAccount = document.getElementById('delete-data');
const formEl = document.getElementById('form');
//  -grab score-counter 
const scoreEl = document.getElementById('score-count');
const promptEl = document.getElementById('promptEl');
// const inputEl = document.getElementById('username-input');

logoutButton.addEventListener('click', async () => {
    await logout();
});

// deleteAccount.addEventListener('click', async () => {
//     await removeData();

// });


let score = 0;
//checking for command cut line
let currentState = 1;

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(formEl);
    // this includes a test input
    await createPlayerData({ user_name: form.get('username-input'), user_score: score });
    window.location.href = '/';
});

function startGame() {
    document.addEventListener('keydown', event => {
        event.preventDefault();
        //verify correct answer
        if (currentState === 1 && event.metaKey && event.code === 'KeyX'){
        //alert user if correct
            alert('you commanded ⌘X to cut a line!');
        //update the state
            score++;
        //update the dom view
            promptEl.textContent = 'prompt 2: on your keyboard, enter the shortcut to paste a whole line in VsCode';
            scoreEl.textContent = score;
            currentState++;
        } else if (currentState === 2 && event.metaKey && event.code === 'KeyV'){
            alert ('you command the paste command!');
            score++;
            scoreEl.textContent = score;
        }
        //create brand new if state and do the same if else alert error
    });
}

//do a click event listener for the end of the game to toggle startGame()?
startGame();

// if (inputEl.addEventListener('click', () => {
//     return;
// })
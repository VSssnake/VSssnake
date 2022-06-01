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

function startGameMac() {
    document.addEventListener('keydown', (event) => {
        //verify correct answer
        if (currentState === 1 && event.metaKey && event.code === 'KeyX'){
        //alert user if correct
            alert('you used ⌘X to cut a line!');
        //update the state
            score++;
        //update the dom view
            promptEl.textContent = 'prompt 2: on your keyboard, enter the shortcut to paste a whole line in VSCode';
            scoreEl.textContent = score;
            currentState++;
        } else if (currentState === 2 && event.metaKey && event.code === 'KeyV'){
            alert ('you used the paste command!');
            score++;
            promptEl.textContent = 'prompt 3: on your keyboard, enter the shortcut to move to the beginning of a line in VSCode';
            scoreEl.textContent = score;
            currentState++;
        } else if (currentState === 3 && event.metaKey && event.code === 'ArrowLeft'){
            event.preventDefault();
            alert ('you used ⌘← to move to the beginning of a line!');
            score++;
            scoreEl.textContent = score;
            currentState++;
            promptEl.textContent = 'prompt 4: on your keyboard, enter the shortcut to move to the end of a line in VSCode';
        } else if (currentState === 4 && event.metaKey && event.code === 'ArrowRight'){
            alert ('you used the ⌘→ shortcut!');
            score++;
            scoreEl.textContent = score;
            currentState++;
            promptEl.textContent = 'prompt 5: on your keyboard, enter the command to comment out a whole line in VSCode';
        } else if (currentState === 5 && event.metaKey && event.code === 'Slash'){
            alert ('you command the paste command!');
            score++;
            scoreEl.textContent = score;
            promptEl.textContent = 'Congrats, you completed Level 1 (the only level we have!) submit info below to save your game to the scoreboard.';
        } 
        //create brand new if state and do the same if else alert error
    });
}

//do a click event listener for the end of the game to toggle startGame()?
function findOS(){
    if (navigator.userAgentData.platform === 'macOS'){
        startGameMac();
        return console.log('this is a MacOS');
    } else console.log('this is a Windows');
} 

findOS();
// startGameMac();

// if (inputEl.addEventListener('click', () => {
//     return;
// })
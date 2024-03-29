import { logout, createPlayerData, checkAuth } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');
// const deleteAccount = document.getElementById('delete-data');
const formEl = document.getElementById('form');
//  -grab score-counter 
const scoreEl = document.getElementById('score-count');
const promptEl = document.getElementById('promptEl');
const homeButton = document.getElementById('home');
// const inputEl = document.getElementById('username-input');

const boxOne = document.getElementById('box-one');
const boxTwo = document.getElementById('box-two');
const boxThree = document.getElementById('box-three');
const boxFour = document.getElementById('box-four');
const boxFive = document.getElementById('box-five');
const loadAudio = new Audio ('/assets/load.mp3');
const correctAudio = new Audio ('/assets/correct.mp3');
const tadaAudio = new Audio ('/assets/tada.WAV');

window.addEventListener('load', () => {
    loadAudio.play();
});

logoutButton.addEventListener('click', async () => {
    await logout();
});

homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

checkAuth();


let score = 0;
let currentState = 1;

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(formEl);
    if (score > 0) {
        await createPlayerData({ user_name: form.get('username-input'), user_score: score });
        window.location.href = '/';
    } else {
        alert('you need to ssscore pointsss');
    }
});


function batteryLevel() {
    //identifies score state
    if (score === 75) {
    //shows battery level 
        boxOne.classList.remove('hidden');
    //plays audio for correct answer
        correctAudio.play();
    } else if (score === 225) {
        boxTwo.classList.remove('hidden');
        correctAudio.play();
    } else if (score === 450) {
        boxThree.classList.remove('hidden');
        correctAudio.play();
    } else if (score === 1000) {
        boxFour.classList.remove('hidden');
        correctAudio.play();
    } else if (score === 2100) {
        boxFive.classList.remove('hidden');
        tadaAudio.play();
    }
}

batteryLevel();

function startGameMac() {
    document.addEventListener('keydown', (event) => {
        //verify correct answer
        if (currentState === 1 && event.metaKey && event.code === 'KeyX'){
        //alert user if correct
            alert('you used ⌘X to cut a line!');
        //update the score
            score += 75;
        //increase progress
            batteryLevel();
        //stage prompt for next currentState
            promptEl.textContent = 'enter the shortcut to paste a whole line';
        //reflect score view
            scoreEl.textContent = score;
        //stage currentState for next question
            currentState++;
        } else if (currentState === 2 && event.metaKey && event.code === 'KeyV'){
            alert ('you used the paste command!');
            score += 150;
            batteryLevel();
            promptEl.textContent = 'enter the shortcut to move to the beginning of a line';
            scoreEl.textContent = score;
            currentState++;
        } else if (currentState === 3 && event.metaKey && event.code === 'ArrowLeft'){
            event.preventDefault();
            alert ('you used ⌘← to move to the beginning of a line!');
            score += 225;
            batteryLevel();
            scoreEl.textContent = score;
            currentState++;
            promptEl.textContent = 'enter the shortcut to move to the end of a line';
        } else if (currentState === 4 && event.metaKey && event.code === 'ArrowRight'){
            alert ('you used the ⌘→ shortcut!');
            score += 550;
            batteryLevel();
            scoreEl.textContent = score;
            currentState++;
            promptEl.textContent = 'enter the shortcut to comment out a whole line';
        } else if (currentState === 5 && event.metaKey && event.code === 'Slash'){
            alert ('you used the shortcut to comment out a line!');
            score += 1100;
            batteryLevel();
            scoreEl.textContent = score;
            promptEl.textContent = 'Congrats, you completed Level 1 (the only level we have!) submit info below to save your game to the scoreboard.';
        } 
    });
}

function startGameWindows() {
    document.addEventListener('keydown', (event) => {
        if (currentState === 1 && event.ctrlKey && event.code === 'KeyX'){
            alert('you used CTRL X to cut a line!');
            score += 75;
            batteryLevel();
            promptEl.textContent = 'enter the shortcut to paste a whole line';
            scoreEl.textContent = score;
            currentState++;
        } else if (currentState === 2 && event.ctrlKey && event.code === 'KeyV'){
            alert ('you used the paste command!');
            score += 150;
            batteryLevel();
            promptEl.textContent = 'enter the shortcut to move to the beginning of a line';
            scoreEl.textContent = score;
            currentState++;
        } else if (currentState === 3 && event.ctrlKey && event.code === 'ArrowLeft'){
            event.preventDefault();
            alert ('you used Ctrl← to move to the beginning of a line!');
            score += 225;
            batteryLevel();
            scoreEl.textContent = score;
            currentState++;
            promptEl.textContent = 'enter the shortcut to move to the end of a line';
        } else if (currentState === 4 && event.ctrlKey && event.code === 'ArrowRight'){
            alert ('you used the Ctrl→ shortcut!');
            score += 550;
            batteryLevel();
            scoreEl.textContent = score;
            currentState++;
            promptEl.textContent = 'enter the shortcut to comment out a whole line';
        } else if (currentState === 5 && event.ctrlKey && event.code === 'Slash'){
            alert ('you used the shortcut to comment out a line!');
            score += 1100;
            batteryLevel();
            scoreEl.textContent = score;
            promptEl.textContent = 'Congrats, you completed Level 1 (the only level we have!) submit info below to save your game to the scoreboard.';
        }
        //create brand new if state and do the same if else alert error
    });
}

//identifies operating system user is using to determine which game loop to start
function findOS(){
    if (navigator.userAgentData.platform === 'macOS'){
        startGameMac();
        return console.log('this is a MacOS');
    } else startGameWindows(); 
    console.log('this is a Windows');
} 

findOS();
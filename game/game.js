import { logout, createPlayerData } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');
// const deleteAccount = document.getElementById('delete-data');
const formEl = document.getElementById('form');
//  -grab score-counter 
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


let score = 0;


function startGame() {
    document.addEventListener('keydown', event => {
        //verify correct answer
        if (event.metaKey && event.code === 'KeyX'){
                    //alert user if correct
            alert('you commanded ⌘X to cut a line!');
        //update the state
            score++;
        //update the dom view
            scoreEl.textContent = score;
        }
        //create brand new if state and do the same if else alert error
    });
}
startGame();

// saveGame();
//grab score + username
//push to supabase 
//redirect to home 


//this is the function we were working on with TAS

// function startGame() {
//     document.addEventListener('keydown', event => {
//         //verify correct answer
//         if (event.metaKey && event.code === 'KeyX'){
//                     //alert user if correct
//             alert('you commanded ⌘X to cut a line!');
//         //update the state
//             score++;
//         //update the dom view
//             scoreEl.textContent = score;
//         } else {
//             alert('wronk!');
//         }
//         //create brand new if state and do the same if else alert error
//     });
//}
import { getScores } from './fetch-utils.js';
import { renderScore } from './render-utils.js';

console.log('hello from app.js');
const tokenButton = document.getElementById('token');

tokenButton.addEventListener('click', () => {
    return window.location.href = '/auth';

});




async function displayScores(){
    const highScoreEl = document.getElementById('scores');

    const scores = await getScores();

    for (let score of scores) {
        const scoreOutput = renderScore(score);
        highScoreEl.append(scoreOutput);

        console.log(scores);
    }
}



displayScores();
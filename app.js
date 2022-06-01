import { getScores } from './fetch-utils.js';
import { renderScore } from './render-utils.js';

const tokenButton = document.getElementById('token');
const aboutButton = document.getElementById('about');

tokenButton.addEventListener('click', () => {
    return window.location.href = '/auth';

});

aboutButton.addEventListener('click', () => {
    return window.location.href = '/about';
});




async function displayScores(){
    const highScoreEl = document.getElementById('scores');

    const scores = await getScores();

    for (let score of scores) {
        const scoreOutput = renderScore(score);
        highScoreEl.append(scoreOutput);
    }
}

displayScores();

function findOS(){
    if (navigator.userAgentData.platform === 'macOS'){
        console.log('this is a MacOS');
    } else {
        (navigator.userAgentData.platform === 'Windows');
    } console.log('this is a Windows');
}
findOS();
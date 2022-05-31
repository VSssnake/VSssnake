export function renderScore(highscore) {
    const div = document.createElement('div');
    div.classList.add('highscore');

    const h4 = document.createElement('h4');
    h4.textContent = highscore.user_name;
    
    const p = document.createElement('p');
    p.textContent = highscore.high_score;

    div.append(h4, p);

    return div;
}
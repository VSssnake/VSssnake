export function renderScore(booger) {
    const div = document.createElement('div');
    div.classList.add('highscore');

    const h4 = document.createElement('h4');
    h4.textContent = booger.user_name;
    
    const p = document.createElement('p');
    p.textContent = booger.user_score;

    div.append(h4, p);

    return div;
}
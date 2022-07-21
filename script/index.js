let input = document.querySelector(".userInput");
let button = document.querySelector('.button');
button.addEventListener('click', SaveUser, false);
let players = [];

function SaveUser() {
    let player = {};
    if (!(input.value)) {
        alert("Please , Enter name!")
        return;
    }
    player['name'] = input.value;
    player['score'] = 0;
    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));
    window.location.href = '../quiz.html';
}
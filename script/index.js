let input = document.querySelector(".userInput");
let button = document.querySelector('.button');
<<<<<<< HEAD
button.addEventListener('click', SaveUser, false);
let players = [];

function SaveUser() {
    let player = {};
=======
button.addEventListener('click', SavePlayer, false);

function SavePlayer() {
>>>>>>> cecbbd6f22b465fa4034e85df7aac9b48af4c3e7
    if (!(input.value)) {
        alert("Please , Enter name!")
        return;
    }
<<<<<<< HEAD
    player['name'] = input.value;
    player['score'] = 0;
    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));
    window.location.href = '../quiz.html';
=======
    let players = JSON.parse(localStorage.getItem('players'));
    if (players) {
        insertPlayerToLocal(players);
    } else {
        let players = [];
        insertPlayerToLocal(players);
    }
    function insertPlayerToLocal(players) {
        players.push({
            name: input.value,
            score: 0
        });
        localStorage.setItem('players', JSON.stringify(players));
        window.location.href = '../quiz.html';

    }

>>>>>>> cecbbd6f22b465fa4034e85df7aac9b48af4c3e7
}
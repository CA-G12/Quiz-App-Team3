let input = document.querySelector(".userInput");
let button = document.querySelector('.button');
button.addEventListener('click', SaveUser, false);

function SaveUser() {
    if (!(input.value)) {
        alert("Please , Enter name!")
        return;
    }
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

}
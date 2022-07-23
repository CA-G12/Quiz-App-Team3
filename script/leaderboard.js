
let tbody = document.getElementById("tbody");
displayHighestScore();
function displayHighestScore() {
    let players = JSON.parse(localStorage.getItem("players"));
    if (players) {
        players = players.sort((a, b) => b.score - a.score);
        createViews(players);
    }

}
function createViews(players) {
    for (let i = 0; i < 5; i++) {
        let row = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdScore = document.createElement('td');
        tdName.textContent = players[i]['name'];
        tdScore.textContent = players[i]['score'];
        row.append(tdName);
        row.append(tdScore);
        tbody.append(row);
    }
}
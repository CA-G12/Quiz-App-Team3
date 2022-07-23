
<<<<<<< HEAD


/*const array1 = [1, 30, 4, 21, 100000];
array1.sort(compareNumbers);
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

array1.slice(-1,)

function compareNumbers(a, b) {
  return a - b;
}*/
=======
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
    for (let i = 0; i <players.length; i++) {
        let row = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdScore = document.createElement('td');
        tdName.textContent = players[i]['name'];
        tdScore.textContent = players[i]['score'];
        row.append(tdName);
        row.append(tdScore);
        tbody.append(row);
        if(i==5){
            break;
        }
    }
}
>>>>>>> cecbbd6f22b465fa4034e85df7aac9b48af4c3e7

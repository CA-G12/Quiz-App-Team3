let players = [
    {
        name: 'mohammed',
        score: 10
    }, {
        name: 'Ali',
        score: 9
    }, {
        name: 'lina',
        score: 8
    },
    {
        name: 'shimaa',
        score: 7
    }
    ,
    {
        name: 'rania',
        score: 6
    }
    ,
    {
        name: 'saeed',
        score: 5
    }
    ,
    {
        name: 'fadi',
        score: 4
    }
]
let counter = 0;
let tbody = document.getElementById("tbody") ; 
let highestObject  = [] ;
displayHighestScore(players, counter);
function displayHighestScore(players, counter) {
    let max = players[0];
    let index = 0;
    for (let i = 0; i < players.length; i++) {
        if (players[i].score > max.score) {
            max = JSON.parse(JSON.stringify(players[i]));
            index = i;
        }
    }
    highestObject.push(max) ;
    players.splice(index, 1);
    if (counter == 5) {
        return createViews(highestObject);
    } else {
        counter++;
        return displayHighestScore(players, counter);
    }
}
function  createViews(highestObject){
for (let i = 0; i < highestObject.length; i++) {
let row  = document.createElement('tr'); 
let tdName = document.createElement('td'); 
let tdScore = document.createElement('td'); 
tdName.textContent  = highestObject[i]['name']; 
tdScore.textContent = highestObject[i]['score']; 
row.append(tdName); 
row.append(tdScore); 
tbody.append(row) ; 
}
}
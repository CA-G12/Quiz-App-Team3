import {data}  from './data.js';

let dataLength = data.length;




let randomIndexData = randomUnique(dataLength);
//console.log(randomIndexData);


let currentQuestionIndex = randomIndexData[0];
//console.log(currentQuestionIndex); //current question index


console.log(data[currentQuestionIndex].question); // current question





let optionsLength = data[currentQuestionIndex].answers.length;


//let options = data[currentQuestionIndex].answers
//console.log(options);



let indexOptions = randomUnique(optionsLength);
//console.log(indexOptions);
for(let i=0; i<optionsLength; i++){
    //console.log('option index', indexOptions);
      //let ans = options[indexOptions];
     console.log(data[currentQuestionIndex].answers[indexOptions[i]]);
   
    // console.log(indexOptions);
   }


/*
let currentCounter = dataLength - randomIndexData.length +1 ;
console.log(currentCounter);

randomIndexData[0].shift;
*/




function randomUnique(max){
    var arr = [];
    while(arr.length < max){
        var r = Math.floor(Math.random() * max-1) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}



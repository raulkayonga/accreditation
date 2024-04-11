//looping - While loop and for loop
// counting numbers --  1 - 100
//  divisible by 3 and remainder is 0 === hurray you won.

var results = [];
var count = 15;

function my_game(){
    for ( var count =1; count <=100; count++) {
    if (count % 3 === 0 && count % 5 === 0){
        results.push("Divisibleby3&5!");
        
    } else if (count % 3 === 0){
        results.push("DivisibleBy3%");
        
    } else if (count % 5 === 0){
        results.push("DivisibleBy5");
    } else{
        results.push(count);
    }
    count++;
    }
    console.log(results);
    }
my_game();
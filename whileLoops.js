//looping - While loop and for loop
// counting numbers --  1 - 100
//  divisible by 3 and remainder is 0 === hurray you won.

var results = [];
var count_1 = 1;

function my_game(){
    while (count_1 <=50) {
    if (count_1 % 3 === 0 && count_1 % 5 === 0){
        results.push("Divisibleby3&5!");
        
    } else if (count_1 % 3 === 0){
        results.push("divisibleBy3%");
        
    } else if (count_1 % 5 === 0){
        results.push("divisibleBy5");
    } else{
        results.push(count_1);
    }
    count_1++;
    }
    console.log(results);
    }
my_game();
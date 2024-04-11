// Assignment for Functions

// Anne's Budget
// 15500

// Used amount to buy sugar
// 3000 

// Initial Price of Chicken before 15%
// 440 * 15% = 66
// 440 - 66 = 374


// Write a program to return the number of chicken bought
// & new retailing price

// Get # of Packets of Sugar

function getSugar(moneyForSugar){
    var sugarPrice = 420;
    var totalPacketsOfSugar = moneyForSugar / sugarPrice;

    console.log('Anne purchased ' + Math.floor(totalPacketsOfSugar) + ' packets of sugar.');

    return moneyForSugar % 420;
}

getSugar(3000);


// Get # of Chicken purchased

function getCashForChicken(cashAtHand){
    var initialCash = 15500;
    var usedAmount = 3000;
    var remainingCashAtHand = initialCash - usedAmount;
    // =======
    var chickenPrice = 440;
    var numOfChicken = remainingCashAtHand / chickenPrice;

    console.log('After using ' + usedAmount + ' Ksh.' + ' for sugar, ' + 'Anne is remaining with ' + remainingCashAtHand + ' Ksh.' + ' to use to purchase chicken.');
    console.log('Anne bought ' + Math.floor(numOfChicken) + ' chickens from ' + remainingCashAtHand + ' Ksh.');
    
    return remainingCashAtHand % 28;
    
}
getCashForChicken(15500);
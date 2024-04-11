// HardCode
function getSalary() {
    var income = 10000;
    alert('My income is ' + income);
}
getSalary();





function getSalary() {

    var fullName = prompt("Full name");
    var phone = prompt("Phone");
    var salary = parseInt(prompt("Salary"));

    // This is for users ..
    alert(salary);
    alert(phone);
    alert(fullName);
    // This is for developers ..
    console.log(salary);
    console.log(phone);
    console.log(fullName);

}
 getSalary();


// Simple calculations
// Write a small program that can compute the no. of bread to be bought
//based on the cash given. Each bread costs 65
function getBread(money_given){
    var noOfBreadBought = Math.floor(money_given / 65);
    alert("Using the money given, I have been able to buy " + noOfBreadBought + " number of breads.");
    console.log("Using the money given, I have been able to buy " + noOfBreadBought + " number of breads.");
    
    //get the remainder -- we use the modulus operator
    return money_given % 65;
}
getBread(1000);


// Number of badges printed. Each badge takes 2 minutes
function getBadge(TotalNumOfDelegates){
    var numOfBadgesPrinted = (TotalNumOfDelegates / 2);
    // for users
    alert("From the toal number of delegates, " + numOfBadgesPrinted + "delegates have been printed");
    // for devevolpers 
    console.log("From the toal number of delegates, " + numOfBadgesPrinted + "delegates have been printed");
}
getBadge(500);

// AdditionalScriptforAccreditation
// This function calculates and stores information about badge printing and delegate attendance
function getBadge(TotalNumOfDelegates) {
    // Calculate the number of badges printed by dividing the total number of delegates by 2 (assuming it takes 2 minutes to print each badge)
    var numOfBadgesPrinted = (TotalNumOfDelegates / 2);

    // Assume no delegates have shown up initially
    var numOfDelegatesWhoShowedUp = 0;

    // Assume all delegates haven't shown up initially
    var numOfDelegatesWhoDidntShowUp = TotalNumOfDelegates;

    // Assume all delegates who showed up collected their badges
    var numOfCollectedBadges = numOfDelegatesWhoShowedUp;

    // Calculate the number of unprinted badges
    var numOfUnprintedBadges = TotalNumOfDelegates - numOfBadgesPrinted;

    // Create a set of metrics to show the number of printed badges, collected badges, unprinted badges, delegates who showed up, and delegates who didn't show up
    var dashboard = {
        printedBadges: numOfBadgesPrinted,
        collectedBadges: numOfCollectedBadges,
        unprintedBadges: numOfUnprintedBadges,
        delegatesWhoShowedUp: numOfDelegatesWhoShowedUp,
        delegatesWhoDidntShowUp: numOfDelegatesWhoDidntShowUp
    };

    // Return the set of metrics
    return dashboard;
}

// Use the function to calculate the metrics for 500 delegates
var accreditationDashboard = getBadge(500);

// Display the metrics in the console
console.log(accreditationDashboard);

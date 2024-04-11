//Conditional statements - 04-04-24
// compute import duty - make & model & cc --->> compute importy duty.
//import duty is 30% of the value of the car?

function carCost(country, currency){
    var make = prompt("Enter the make of your car :");
    var model = prompt("Enter the model of your car :");
    var cost_of_car_usd = 20000;
    var cost_of_car_usd =  prompt("Enter the model of your car :");
    var import_duty = cost_of_car_usd * (30/100);
    var total_cost_of_car = cost_of_car_usd + import_duty;
    alert("The total cost of the car is :" + total_cost_of_car);

    //add conditional statements
    if (total_cost_of_car >=50000){
        alert("The cost of your car is :" + total_cost_of_car + " usd " + "and you qualify for a loan of 100k rwf :");
    }
    if (total_cost_of_car >=30000 && total_cost_of_car <=49000){
        alert("The cost of your car is :" + total_cost_of_car + " usd " + "and you qualify for a loan of 60k rwf :");
    }
    if (total_cost_of_car<30000){
        alert("The cost of your car is :" + total_cost_of_car + " usd " + "and you qualify for a loan of 40k rwf :");
    }
 }
carCost();

// Exercises Delegate
// Event Duration - Location, Type (Forum, Conference, Exhibition, Concert)

function addDelegate(){
    var firstName = prompt("Enter firstname : ");
    var lastName = prompt("Enter lastname : ");
    var emailAddress = prompt("Enter email : ");
    var phoneNum = prompt("Enter phone number : ");
    var eventName = prompt("Enter event name : ");
    var eventCat = ["Forum", "Conference", "Concert", "Hybrid", "Exhibition"];

    // additionalComments
    if (eventCat === array[0]){
        alert("Your event is authorised.");
    }

    
}
addDelegate();


// Arrays in JS - Enables us to create collections



//Loops


//For Loop 

// While Loop


// DOM Js


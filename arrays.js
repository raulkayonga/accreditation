//Looping in JS -- while loop and for loop
// update fizzbuzz with while loop

var output = [];
var count = 1;

function notification(){
    while (count <=100){
    if (count % 7 === 0 && count % 4 === 0){
        output.push("GeneralAlert");
    }
    else if (count % 3 === 0){
        output.push("OldAlert");
    }
    else if (count % 5 === 0) {
        output.push("NewAlert");
    }
    else{
        output.push(count);
    }
    count++;
    }
    console.log(output);
}
// call this function from a new js-file
notification();

function eventStart(){
    while (count >=300){
        if(count % 5 === 0){
            output.push("This is a new exercise result!" );
        }
    }
}
eventStart();
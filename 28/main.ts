//create a variable
let age = 22;

// creating a program for determine the stage of life using if else chain
if (age < 2){
    console.log("you are a baby");
}

else if (age >= 2 &&  age < 4){
    console.log("you are a toddler");
}
 else if(age >= 4 && age <13){
    console.log("you are kid.");
 }
 else if(age >= 13 && age <20){
    console.log("you are a teenager");
 }
 else if (age >= 20 && age < 65){
    console.log("you are a adults");
 }
else if (age >= 65){
    console.log("you are a elder");
}
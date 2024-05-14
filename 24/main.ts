
//define varriables
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple","banana", "mango"];
// test for equality and inequality with strings
console.log("is apple is equal to apple");
console.log(apple == "apple");

console.log(" \nis apple is not equal to apple");
console.log(apple != "apple");

//tests using lowercase funtion
console.log("\nis APPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() =="apple" );


console.log("\nis APPLE is  not equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() != "apple" );

//numerical tests
console.log("\nis ten is equal 20?");
console.log(ten == 20);

console.log("\nis ten is  not equal to twenty");
console.log(ten != 20);

// greator than
console.log ("\nten is greator than 20/");
console.log(ten > 20);

// less than
console.log("10 is less thanis 20?");
console.log(10 < 20);

// greator than is equal to
console.log("ten is greator than or equal to 5");
console.log(ten >= 5);

//less than is equal
console.log("\n twenty is less than or equal to  10");
console.log(twenty <=  10);

// tests using "and"& "or" operators

//using &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);


console.log ("\ntwenty is equal to 10 and twenty is less than 30");
console.log(twenty == 10  && twenty < 30 );

//using || (OR)
console.log("\n twenty is greater 50 OR twenty is equal 20");
console.log(twenty > 50 || twenty == 20);


console.log("\n twenty is greater 50 OR twenty is not equal 20");
console.log(twenty > 50 || twenty != 20);

// test weather an item is include in array
console.log("\nis mango include  in my  fruits array");
console.log(fruits.includes("mango"));

// not include
console.log("\nis mango not include in my fruits array");
console.log(!fruits.includes("mango"));































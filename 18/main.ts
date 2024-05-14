// making a array of countries and print its orignal order
let countriesTovisit:string[] = ["canada","denmark","brazil","australia"];
console.log("original Order",countriesTovisit);

// print a array in alphabetical order without modifying the Actual Array list
console.log("alphabetical Order:",[...countriesTovisit].sort());

// show that the array is still in its orignal order
console.log("still in orignal Order",countriesTovisit);

//print the array in reverse order without modifying the actual array list
console.log ("rewerse Order",[...countriesTovisit].reverse());

// show that the array is still in its orignal order
console.log("still in orignal Order",countriesTovisit);

// we have changed the original array order now
console.log("original array reverse",countriesTovisit.reverse());

//print the array to show that its back to its original order
console.log("back to Original Order",countriesTovisit.reverse());

// print the array to show that its order has been changed in alphabetical order now
console.log("sorted in Alphabetical Order",countriesTovisit.sort());


// we have changed  again the original array order now in reverse order again
console.log("original array reverse Again",countriesTovisit.reverse());

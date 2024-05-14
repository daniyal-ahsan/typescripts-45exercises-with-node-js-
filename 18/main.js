var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print its orignal order
var countriesTovisit = ["canada", "denmark", "brazil", "australia"];
console.log("original Order", countriesTovisit);
// print a array in alphabetical order without modifying the Actual Array list
console.log("alphabetical Order", __spreadArray([], countriesTovisit, true).sort);
// show that the array is still in its orignal order
console.log("still in orignal Order", countriesTovisit);
//print the array in reverse order without modifying the actual array list
console.log("rewerse Order", __spreadArray([], countriesTovisit, true).reverse());
// show that the array is still in its orignal order
console.log("still in orignal Order", countriesTovisit);
// we have changed the original array order now
console.log("original array reverse", countriesTovisit.reverse());
//print the array to show that its back to its original order
console.log("back to Original Order", countriesTovisit.reverse());
// print the array to show that its order has been changed in alphabetical order now
console.log("sorted in Alphabetical Order", countriesTovisit.sort());
// we have changed  again the original array order now in reverse order again
console.log("original array reverse Again", countriesTovisit.reverse());

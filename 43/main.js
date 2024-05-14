//define a function to print each magacian name from an array
function show_magicians(magacian) {
    magacian.forEach(function (name) { return console.log(name); });
}
//function to make megicians great .map it will modified array
function make_great(magacian) {
    return magacian.map(function (name) { return "the great ".concat(name); });
}
//define an arry containing magicians name
var magacian_Names = ["harry poter", "daniyal", "danish"];
// making a copy of original array trough .slice() function
var copy_magacian_Name = magacian_Names.slice();
// modify the coppied  array to include"the great" with their names
var copy_great_magacians = make_great(copy_magacian_Name);
// show both arrays original and coppied
//original
console.log("original Array\n");
show_magicians(magacian_Names);
//copy
console.log("\ncoppied Array\n");
show_magicians(copy_great_magacians);

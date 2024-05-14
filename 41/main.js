//define a function to print each magacian name from an array
function show_magicians(magacian) {
    magacian.forEach(function (name) { return console.log(name); });
}
//define an arry containing magicians name
var magacian_Names = ["harry poter", "daniyal", "danish"];
//call the function to print each megicians name
show_magicians(magacian_Names);

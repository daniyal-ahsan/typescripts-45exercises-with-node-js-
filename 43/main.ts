//define a function to print each magacian name from an array
function show_magicians (magacian:string[]){
    magacian.forEach(name =>console.log(name));
    
}
//function to make megicians great .map it will modified array
function make_great(magacian:string[]){
    return magacian.map(name =>`the great ${name}`);
}

//define an arry containing magicians name
let magacian_Names = ["harry poter", "daniyal","danish"]

// making a copy of original array trough .slice() function
let copy_magacian_Name = magacian_Names.slice()

// modify the coppied  array to include"the great" with their names
 let  copy_great_magacians =  make_great(copy_magacian_Name);

 // show both arrays original and coppied

 //original
 console.log("original Array\n")
show_magicians(magacian_Names);


//copy
console.log("\ncoppied Array\n")
show_magicians(copy_great_magacians);

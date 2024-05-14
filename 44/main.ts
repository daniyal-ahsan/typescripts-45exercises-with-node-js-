// define a function  with a rest parameter  that accept items arguments representing our sandwich
function makeSandwich(...item:string[]){
    console.log("making a sandwich with the following item: \n")

    item.forEach(singleItem => console.log(singleItem));
    console.log("\n noe enjoy sandwich");
}

//call the function 3 times with 3 different number of arguments
makeSandwich("chicken","cheese","mayo","egg");

makeSandwich("bread", "butter");

makeSandwich("bread","butter","cheees","tomato","onion","chicken");
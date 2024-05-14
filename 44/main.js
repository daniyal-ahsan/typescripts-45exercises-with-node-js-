// define a function  with a rest parameter  that accept items arguments representing our sandwich
function makeSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("making a sandwich with the following item: \n");
    item.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n noe enjoy sandwich");
}
//call the function 3 times with 3 different number of arguments
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("bread", "butter", "cheees", "tomato", "onion", "chicken");

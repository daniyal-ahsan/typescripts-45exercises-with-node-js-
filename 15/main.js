var guestList = ["hamza", "daniyal", "dazy", "zeeshan"];
var dontCome = guestList[2];
console.log(dontCome, "nhi ahh sakta");
guestList.splice(2, 3, "Amir");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to dinner with me?")); });

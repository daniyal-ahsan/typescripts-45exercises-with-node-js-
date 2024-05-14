// creating a GuestList Array
var guestList = ["hamza", "usman", "daiyal", "zeeshan"];
// making varriable for those guest who cant come
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "nhi ahh sakta hai");
//add or remove value from Array
guestList.splice(0, 1, "Aamir");
//message print for bigger table
console.log("good news ! we have a found a bigger table for Dinner");
// adding a new guest at starting index of Array
guestList.unshift("Ali");
//Adding a new guest at ending index of array
guestList.push("Danish");
// get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "osama");
//print  message of updated list
console.log("updated list of our guest");
//sending a invitation message to our guest one by one with their names
guestList.forEach(function (oneGuest) { return console.log("Salam".concat(oneGuest, ",would you like to dinner with me")); });

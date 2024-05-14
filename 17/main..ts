// creating a GuestList Array
let guestList = ["hamza","usman","daiyal","zeeshan"];

// making varriable for those guest who cant come
let dontCome = guestList[0];

// print the name of guest who cant come
console.log(dontCome,"nhi ahh sakta hai");

//add or remove value from Array
guestList.splice(0,1,"Aamir");

//message print for bigger table
console.log("good news ! we have a found a bigger table for Dinner");

// adding a new guest at starting index of Array
guestList.unshift("Ali");

//Adding a new guest at ending index of array
guestList.push("Danish");

// get a middle index of our guest list array

let middleIndex:number = Math.floor(guestList.length /2); 

//Adding a new guest to middle index of array

guestList .splice(middleIndex,0, "osama");

//print  message of updated list

console.log("updated list of our guest");

//sending a invitation message to our guest one by one with their names
guestList.forEach(oneGuest => console.log(`Salam  ${oneGuest}, would you like to dinner with me`));

// inform that only two guests can be invited to dinner 
console.log("unfortunetely,the new dinner table wont arrive a time, so i can invite two guests to dinner with me");

// using while loop to remove guest from the array until only two name remain
 while(guestList.length > 2){
let removeGuest = guestList.pop();
console.log(`sorry, ${removeGuest} I cant invite to dinner `);
 }

 //sending a invitations to the last two guest on the list
 console.log("Invitations to the last two guest");

 guestList.forEach(lasttwo => console.log(`luckly,${lasttwo},you are still invited to dinner`));


 // removing last two guest
 guestList.pop();
 guestList.pop();

console.log("Empty list:",guestList);


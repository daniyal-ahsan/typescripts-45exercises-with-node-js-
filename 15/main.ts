let guestList = ["hamza","daniyal","dazy","zeeshan"];

let dontCome = guestList[2];

console.log(dontCome,"nhi ahh sakta");

guestList.splice(2,3,"Amir");

guestList.forEach(guest => console.log(`salam ${guest},would you like to dinner with me?`));
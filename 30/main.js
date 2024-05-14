// creatin a array
var userName = ["daniyal", "hani", "kumail", "admin", "danish"];
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status reports?"));
    }
    else {
        console.log("hello ".concat(oneUser, ",thank you for alogin again."));
    }
});
var userName2 = ["dani", "zee", "dazi", "admin", "faiza"];
userName2.forEach(function (oneGuest) {
    if (oneGuest === "admin") {
        console.log("hello ".concat(oneGuest, ",would you like to see a status reports?,"));
    }
    else {
        console.log("hello ".concat(oneGuest, ",thank you for alogin again."));
    }
});

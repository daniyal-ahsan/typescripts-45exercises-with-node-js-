// array of current user
var current_Users = ["daniyal", "Danish", "dania", "rayeenah", "Bazil"];
// array of new user
var new_Users = ["Daniyal", "Danish", "Alisba", "Sadeem", "Bazil"];
// loop through new_users to check for user name avaiblity
new_Users.forEach(function (new_one_user) {
    // makimg a condition for username already exist and save in our condition varaible
    var our_condition = current_Users.some(function (current_one_User) { return current_one_User.toLowerCase() === new_one_user.toLowerCase(); });
    //print  different message using if_else statements  
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});

// array of current user
let current_Users = ["daniyal","Danish","dania","rayeenah","Bazil"]


// array of new user
let new_Users = ["Daniyal","Danish","Alisba","Sadeem","Bazil"]

// loop through new_users to check for user name avaiblity
new_Users.forEach(new_one_user =>{

    // makimg a condition for username already exist and save in our condition varaible
let our_condition = current_Users.some(current_one_User => current_one_User.toLowerCase() === new_one_user.toLowerCase())  

//print  different message using if_else statements  
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }
    else{
        console.log(`this username ${new_one_user} is available`)
    }
})
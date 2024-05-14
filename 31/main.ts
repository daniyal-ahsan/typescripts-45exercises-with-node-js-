let userName = ["daniyal","faiza","daniya","bazil"]

userName = []

if (userName.length === 0){
    console.log("your array is empty we need to find some user")
}
else{
    
userName.forEach(oneUser =>{
    if (oneUser === "admin"){
      console.log(`Hello ${oneUser},would you like to see a status reports?`)
    }
    else{
      console.log(`hello ${oneUser},thank you for alogin again.`)
    }
  })
}
// creatin a array
let userName = ["daniyal", "hani","kumail","admin","danish"]


userName.forEach(oneUser =>{
  if (oneUser === "admin"){
    console.log(`Hello ${oneUser},would you like to see a status reports?`)
  }
  else{
    console.log(`hello ${oneUser},thank you for alogin again.`)
  }
})




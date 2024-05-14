function make_shirt (size: string = "large",printMessage: string = "I love typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)  
}
//calling a function with bu defult values
make_shirt();

//calling afunction now with medium size and defult message
make_shirt("medium");
//calling a function now with small size and different print message
make_shirt("small", "daniyal");
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
//calling a function with bu defult values
make_shirt();
//calling afunction now with medium size and defult message
make_shirt("medium");
//calling a function now with small size and different print message
make_shirt("small", "daniyal");

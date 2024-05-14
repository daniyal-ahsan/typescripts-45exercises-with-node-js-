// define a function  to create a car with obtect with optional options
function create_car(manufecturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufecturer and model
    var car = {
        manufecturer: manufecturer,
        model: model
    };
    //add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//car the function to create a car object
var my_car = create_car("toyota", "corrolla", "color :black", "sunroof: true", "year: 2022");
//print the value to ensure all the information is stored correctelly in the car object
console.log(my_car);

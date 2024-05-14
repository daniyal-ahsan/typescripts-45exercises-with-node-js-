// define a function  to create a car with obtect with optional options
function create_car(manufecturer, model, ...options){

    //initialize a car object with manufecturer and model
    let car = {
        manufecturer: manufecturer,
        model: model
    };
    //add additional options to the car object
    options.forEach(option =>{
        let[key,value] =  option.split(":");
        car[key.trim()] = value.trim();
    })
    return car;

}
//car the function to create a car object
let my_car = create_car("toyota","corrolla","color :black","sunroof: true","year: 2022");

//print the value to ensure all the information is stored correctelly in the car object

console.log(my_car)
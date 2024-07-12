// Define a function to a car object with optional options...
function  create_car(manufacturer, model, ... options){
    // Initinalize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Additional optionas to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
            car[key.trim()] = value.trim();
    });

    return car;
}

// Call the function to create a car object
let my_car = create_car("Toyota", "Corrolla" , "color: Whait", "sunroof: True", "Year: 2024");

// print the variable to ensure all the information is stored correctly in the object 
console.log(my_car);


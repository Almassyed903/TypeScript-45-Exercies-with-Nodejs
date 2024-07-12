//  Define a function to print  each magician name an array
function show_magician(magician: string[]){
magician.forEach(name => console.log(name));
}

// Define an  array contaning magicians name
let magician_names = ["Herry poter" , "Ali", "Zain"]

// Call the function to print each magician name
show_magician(magician_names);
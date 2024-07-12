// Define the  function to show magicians names
 function show_magician(magician: string[]){
magician.forEach(name => console.log(name));

}

// Function to make magicians great  through .map() it will modify array 
function make_great(magician: string[]){
 return magician.map(name => `The Great ${name}`);
}


//  Define the array magician  names
let magician_names = ["Herry ", "Poter", "Almas", "Ayesha"];

// Call make_great function to modify magicians names
 let Great_magicians = make_great(magician_names);

// Call show_magician that show_modified list of magician
 show_magician(Great_magicians);
 
 


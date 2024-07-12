// Define the  function to show magicians names
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great  through .map() it will modify array 
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
//  Define the array magician  names
var magician_names = ["Herry Poter", "Almas", "Ayesha"];
// Making a copy of  Orignal array through .slice() function
var copy_magician_names = magician_names.slice();
// Modify  the copied array to  include "the great "with their names
var copy_great_magicians = make_great(copy_magician_names);
// Shoe both arrays Original and Copied
// Original
console.log("Original Array\n");
show_magician(magician_names);
// Copied
console.log("\nCopied Array\n");
show_magician(copy_great_magicians);

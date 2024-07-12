// Define the  function to show magicians names
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
//  Define the array magician  names
var magician_names = ["Herry ", "Poter", "Almas", "Ayesha"];
var Great_magicians = make_great(magician_names);
show_magician(Great_magicians);

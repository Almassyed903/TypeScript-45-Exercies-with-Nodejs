// Creating a Guest List Of Array
let guestlist = ["Ayesha", "Fatima", "Rabia", "Faiza",];

// Making variable for those who cant come
let dontCome = guestlist[0];
 
// Print the name guest who cant come
console.log(dontCome, "Ye Sub Naii Ahh Sakhti hain");

// Add or Remove Values from Guest List Array
guestlist.splice(0, 1, "Muskan");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding a new value at starting indext ogf Array
guestlist.unshift("Dua");

// Adding a new at ending indext of array
guestlist.push("Laiba");

// Get a middle  indext of  our guest list array
let middleIndext: number =Math.floor(guestlist.length / 2);

// Adding a new guest to middle indext of array
guestlist.splice(middleIndext, 0, "Maheen");

// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with thier names 
guestlist.forEach(oneguest => console.log(`Assalum o Alaikum ${oneguest}, would you like to with me`));

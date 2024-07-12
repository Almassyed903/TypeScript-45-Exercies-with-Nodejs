// Creating a Guest List Of Array
var guestlist = ["Ayesha", "Fatima", "Rabia", "Faiza",];
// Making variable for those who cant come
var dontCome = guestlist[0];
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
var middleIndext = Math.floor(guestlist.length / 2);
// Adding a new guest to middle indext of array
guestlist.splice(middleIndext, 0, "Maheen");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with thier names 
guestlist.forEach(function (oneguest) { return console.log("Assalum o Alaikum ".concat(oneguest, ", would you like to with me")); });
// Inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite you to Guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestlist.forEach(function (lasttwo) { return console.log("Lucky ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two Guest from the list
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);

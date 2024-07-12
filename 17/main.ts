 // Creating a Guest List Of Array
let guestlist = ["Ayesha", "Fatima", "Rabia", "Faiza",];

// Making variable for those who cant come
let dontCome = guestlist[0];
 
// Print the name guest who cant come
console.log(dontCome, "Ye  or Sub Naii Ahh Sakhti hain");

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

// Inform that only two guests can be invited for dinner
   console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite you to Guests to dinner with me" );

// Using while-loop to remove guests from the array until only two names remain
while(guestlist.length > 2)  {
    let removedGuest = guestlist.pop();
   console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}
// Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestlist.forEach(lasttwo => console.log(`Lucky ${lasttwo}, you are still invited to dinner`));

// Removing last two Guest from the list
guestlist.pop();
guestlist.pop();

console.log("Empty List:", guestlist);

 

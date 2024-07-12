let guestlist = ["Ayesha", "Fatima", "Rabia", "Muskan",];

let dontCome= guestlist[0];

console.log(dontCome, "Nai Ahh Sakti");

guestlist.splice(0, 1, "Faiza");

guestlist.forEach(guest => console.log(`Assalum o Alaikum ${guest}, would you like to Dinner with me?`));
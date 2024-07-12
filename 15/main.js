var guestlist = ["Ayesha", "Fatima", "Rabia", "Muskan",];
var dontCome = guestlist[0];
console.log(dontCome, "Nai Ahh Sakti");
guestlist.splice(0, 1, "Faiza");
guestlist.forEach(function (guest) { return console.log("Assalum o Alaikum ".concat(guest, ", would you like to Dinner with me?")); });

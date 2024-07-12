// Creating a Array
var userName = ["Zain", "Ali", "Osama", "Admin", "umar"];
// Using  forEach Loop  on Array 
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
    }
    else
        console.log("Hello ".concat(oneUser, ", thank you loging in again."));
});

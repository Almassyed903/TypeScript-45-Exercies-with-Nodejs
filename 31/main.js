var userNames = ["Zain", "Ali", "Osama", "Admin", "Umar"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is Empty We need to find some users!");
}
else {
    // Using  forEach Loop  on Array 
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
        }
        else
            console.log("Hello ".concat(oneUser, ", thank you loging in again."));
    });
}

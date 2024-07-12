// Array of Current Users
var current_users = ["Usman", "Ali", "Zain", "Osama", "Umar"];
// Array of New Users
var new_users = ["Almas", "Ayesha", "Ali", "Zain", "Hira"];
// Loop through new_users to check for usersname avaibility
new_users.forEach(function (new_one_user) {
    // Making a Condition for username aiready exist and save in our_condition variable   
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print Different message using If-Else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});

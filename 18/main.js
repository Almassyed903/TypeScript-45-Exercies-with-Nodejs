var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array Countries and Print its  Orginal Oder
var countriesTovisit = ["China", "Dubai", "Brazil", "Afganistan"];
console.log("Orginal Oder:", countriesTovisit);
//  Print the Array in Alphabetical Oder Without modifying the Actual Array List
console.log("Alphabetical Oder:", __spreadArray([], countriesTovisit, true).sort());
// Show that array is still in its orginal oder
console.log("Still in  Orginal Oder:", countriesTovisit);
// Print the Array in Reverse without modifying the Actual Array List
console.log("Reverse Oder:", __spreadArray([], countriesTovisit, true).reverse());
// Show that the array is still in its Orginal Oder
console.log("Still in Orginal Oder", countriesTovisit);
// We have Changed the Orginal Array Oder Now
console.log("Orginal Array Reverse:", countriesTovisit.reverse());
// Print the Array to show  that it's back to the orginal oder
console.log("Back to Orginal Oder:", countriesTovisit.reverse());
// Print the array to show that it's oder has been changed in Alphabetical oder now
console.log("Sorted in Alphbetical Oder:", countriesTovisit.sort());
// We have changed again  the Orginal Array Oder Now in teverse oder again
console.log("Orginal Array Reverse Again:", countriesTovisit.reverse());

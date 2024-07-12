// Making a Function
function make_shirt(size, parintMessage) {
    if (size === void 0) { size = "Large"; }
    if (parintMessage === void 0) { parintMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(parintMessage, " prints on shirt"));
}
// Calling a function with by default valuses
make_shirt();
// Calling a function  now with Medium size and default message
make_shirt("Medium");
// Calling a function now with small size  and  Different print Message
make_shirt("small", "i Love JavaScript");

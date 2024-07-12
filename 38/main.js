// Describe a function
function describ_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country, " "));
}
// Calling the function
describ_city("Karachi");
describ_city("Lahore");
describ_city("Berlin", "Germany");

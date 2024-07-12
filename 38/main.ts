// Describe a function
function describ_city(city: string, country: string = "pakistan"){
    console.log(`${city} is in ${country} `);     
}

// Calling the function
describ_city("Karachi");

describ_city("Lahore");

describ_city("Berlin", "Germany");
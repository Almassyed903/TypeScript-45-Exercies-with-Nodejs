// Creating a Array
let userName = ["Zain" ,"Ali", "Osama" , "Admin" , "umar"];

// Using  forEach Loop  on Array 
userName.forEach(oneUser => {
    if (oneUser === "Admin"){
console.log(`Hello ${oneUser},would you like to see a status report?`)
    }else
    console.log(`Hello ${oneUser}, thank you loging in again.`)
})
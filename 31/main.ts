 let userNames = ["Zain", "Ali" , "Osama" , "Admin", "Umar"  ]

 userNames = []
 if (userNames.length === 0){
   console.log("Your Array is Empty We need to find some users!")
 }else{
// Using  forEach Loop  on Array 
userNames.forEach(oneUser => {
    if (oneUser === "Admin"){
console.log(`Hello ${oneUser},would you like to see a status report?`)
    }else
    console.log(`Hello ${oneUser}, thank you loging in again.`)
})
 }
 

 
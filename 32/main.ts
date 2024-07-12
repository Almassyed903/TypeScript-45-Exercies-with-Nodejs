// Array of Current Users
let current_users = ["Usman" , "Ali" , "Zain",  "Osama", "Umar" ]

// Array of New Users
let new_users = ["Almas", "Ayesha" , "Ali" , "Zain" , "Hira"]

// Loop through new_users to check for usersname avaibility
new_users.forEach(new_one_user =>{

 // Making a Condition for username aiready exist and save in our_condition variable   
   let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   // print Different message using If-Else statements
if (our_condition){
    console.log(`sorry ${new_one_user} is already taken`); 
}else{
    console.log(`this username ${new_one_user} is available`);
    
}


      
    
})

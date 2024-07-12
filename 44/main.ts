// Define a function  with a parameter that accept items argument representing our the sandwich
function makeSandwich(...items: string[]){
      console.log("\nMalking a sandwich with the following items: \n");

      items.forEach(singleItem => console.log(singleItem));

      console.log("\nNow I Enjoy Sandwich");
}

// Call the function 3 items with 3 different number of argument
makeSandwich("Tamato Ketchup", "Chicken", "Cheese", "Mayonees", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayonees", "Cheese", "Egg", "Chicken", "Tamato Ketchup");

/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses evaluate to different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearClothing === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.
An if/else conditional statement is being used to assign a new value to the variable bearClothing. If the condition in the 'if' statement (bearChoice === 1) evaluates to true, then this statement will execute, assigning bearClothing the value of 'hat' (bearClothing = 'hat'). The 'else' statement offers an alternative if the 'if' statement does not evaluate to true. If doorChoice is anything other than 1, the 'else' statement will execute, assigning bearClothing the value of 'scarf' (bearClothing = 'scarf'). In this instance, var bearChoice = 1, so the 'if' statement will execute, assigning the value 'hat' to the variable bearClothing.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
bearClothing would be assigned the value of 'scarf' because if the value of the variable doorChoice is not identical to 1, the else statement will execute.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
If..else if..else conditional statements are being used to test multiple conditions in order to decide which string should be logged. Starting from the top statement and working down, the conditions will be tested. Once a condition evaluates to true the code in that statement will execute, and all following conditional statements will be disregarded (won’t be tested).
If none of the if..else if.. conditions are met, the 'else' statement will execute by default as it does not have any conditions associated with it.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
Answer with current code: "You stay with the bear and become it's best friend!"
**IF VARIABLE ON LINE 34 IS UPDATED TO (bearChoice === 3) IT WILL BE:** "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
"You stay with the bear and become it's best friend!"
*/

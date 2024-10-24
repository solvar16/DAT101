"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Complete the given "if" in the task_3-3.mjs file at part 1, statement so that it matches this:
If I wake up at exactly 7 o'clock then I can catch the bus to school.
Run the program with different values of wake-up time (6, 7, 8).
Print out to the HTML page the expression statement you made
*/


printOut("Task 1, 2 and 3");

let wakeUpTime = 8;
const haveToWakeUp = 7;
const wakeForTrain = 8;
printOut("I woke up at " + wakeUpTime);

if (wakeUpTime <= haveToWakeUp) {
  printOut("I can take the bus to school because i woke up by " + haveToWakeUp);
}
else if (wakeUpTime == wakeForTrain){
  printOut("I woke up at " + wakeUpTime + " so i'm too late for the bus, but can catch the train to school.");
}
else {
  printOut("I have to take the car to school.");
}


printOut(newLine);


printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement

Change part 4 to print “Positive”, “Negative” or “Zero” accordingly. Run the program with different types of
values for the variable to check the "if" statement.
*/
const myNumber = 0;
printOut("My number is: " + myNumber);

if (myNumber > 0){
  printOut("The number is positive.");
}
else if (myNumber < 0){
  printOut("The number is negative");
}
else {
  printOut("The number is zero");
}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Imagine you have a photo editing profession. And you have a website where people can upload pictures
for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them.
Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it.
Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small"
*/
let imageMP = Math.floor(Math.random()*8)+ 1; //+ 1 for at det genererte nummueret skal starte på 1. Da kommer også tall 8 med i genereringen.
printOut("The uploaded image size is " + imageMP + "MP");

if(imageMP >= 4){
  printOut("Thank you!");
}
else{
  printOut("The image is too small!");
}

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large”
*/
let image = Math.floor(Math.random()*8)+ 1; 
printOut("The uploaded image size is " + image + "MP");

if(image >= 4 && image < 6){
  printOut("Thank you!");
}
else if(image >= 6){
  printOut("The image is too large!")
}
else {
  printOut("The image is too small!");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D”
*/

const monthList =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  printOut("Month: " + monthName)

if (monthName.includes("r")){
  printOut("You must take vitamin D.");
}
else {
  printOut("You do not need to take vitamin D");
}

let daysOfMonth = null
switch (monthName){
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
  daysOfMonth = 31
break;
  case "April":
  case "June":
  case "September":
  case "November":
  daysOfMonth = 30
break;
  case "February":
  daysOfMonth = 28
}

printOut("There are " + daysOfMonth + " days in " + monthName);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Expand exercise 8 to print how many days there are in the current month. And do not use date object.
*/


printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month.
*/

const monthList2 =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth2 = monthList2.length;
  const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth2)];
  printOut("Month: " + monthName2)

let galleryStatus = null
switch (monthName2){
  case "January":
  case "February":
  case "June":
  case "July":
  case "August":
  case "September":
  case "October":
  case "November":
  case "December":
  galleryStatus = "Open"
break
  case "April":
  galleryStatus = "Open next door"
break;
  case "March":
  case "May":
  galleryStatus = "closed"
}

printOut("Gallery Status: " + galleryStatus);

printOut(newLine);

"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows
*/

// printOut(" ");

let txt = " ";

const numberTen = 10;
for(let oneToTen = 1; oneToTen <= numberTen; oneToTen++) {
    txt += " " + oneToTen.toString();

}

printOut(txt)
txt = " ";
const numberOne = 1;
for(let tenToOne = 10; tenToOne >= numberOne; tenToOne--){
    txt += " " + tenToOne.toString();
}

printOut(txt);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress
*/

const answerNumber = 45;
let guessNumber = 0;
while(answerNumber !== guessNumber){
    guessNumber = Math.ceil(Math.random()* 60); //ceil genererer fra fra 1 til 60, mens math.floor genererer fra 0 til 60
}
printOut("Guess Number = " + guessNumber.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time
*/

guessNumber = 0;
let guessCount = 0;
const startTime = Date.now();
while(answerNumber !== guessNumber){
    guessCount++;
    guessNumber = Math.ceil(Math.random() * 100000);
}
const endTime = Date.now();
const timeUsed = endTime - startTime;
printOut("Antall gjetninger " + guessCount.toString() + " tok " + timeUsed.toString() + " ms");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
○ HINT: A prime number is any natural number greater than 1 that is only divisible by itself and
1. The number 1 is not a prime. (See Wikipedia on primes or ask your AI).
*/

for(let numberTwo = 2; numberTwo <= 200; numberTwo++) {
    let notAprime = false;
    let divide = 2;
    while((notAprime === false) && (divide < numberTwo)){
        notAprime =(numberTwo % divide) === 0;
        divide++;
    }
    if(notAprime === false){
        printOut(numberTwo.toString() + " ");
    }
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.
○ Hint: Use what we call nested loops. This is a "for" loop within another "for" loop.
Use the provided printOut function to print each row with its sets of columns; remember to place this in
the right level of the nested for loops. The output should look like this:
K1R1 K2R1 K3R1 K4R1 K5R1 K6R1 K7R1 K8R1 K9R1
K1R2 K2R2 K3R2 K4R2 K5R2 K6R2 K7R2 K8R2 K9R2
K1R3 K2R3 K3R3 K4R3 K5R3 K6R3 K7R3 K8R3 K9R3
K1R4 K2R4 K3R4 K4R4 K5R4 K6R4 K7R4 K8R4 K9R4
K1R5 K2R5 K3R5 K4R5 K5R5 K6R5 K7R5 K8R5 K9R5
K1R6 K2R6 K3R6 K4R6 K5R6 K6R6 K7R6 K8R6 K9R6
K1R7 K2R7 K3R7 K4R7 K5R7 K6R7 K7R7 K8R7 K9R7
*/

let rows = 10;
let columns = 8;
let rowText = "";
let columnText = "";
let wholeText = "";

for(let j = 1; j < columns; j++) {
    wholeText += newLine
    rowText = "R" + j;
for (let i = 1; i < rows; i++) {
    columnText = "K" + i;
wholeText += (columnText + rowText);
    }

}
printOut(wholeText);


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.
Hint for Success: If you successfully complete the sorting challenge, you'll unlock a valuable hint for Part
9 of "DAT101: Mandatory assignment 4.1" that will make it easier to solve. The learning outcomes remain
the same, but this hint will give you a head start!
*/

const maxGrade = 236

let grade1 = Math.ceil(Math.random()* maxGrade)
let grade2 = Math.ceil(Math.random()* maxGrade)
let grade3 = Math.ceil(Math.random()* maxGrade)
let grade4 = Math.ceil(Math.random()* maxGrade)
let grade5 = Math.ceil(Math.random()* maxGrade)

let prc1 = (grade1 / maxGrade) * 100;
let prc2 = (grade2 / maxGrade) * 100;
let prc3 = (grade3 / maxGrade) * 100;
let prc4 = (grade4 / maxGrade) * 100;
let prc5 = (grade5 / maxGrade) * 100;

let pc1 = Math.ceil(prc1);
let pc2 = Math.ceil(prc2);
let pc3 = Math.ceil(prc3);
let pc4 = Math.ceil(prc4);
let pc5 = Math.ceil(prc5);

const gradeA = 100;
const gradeB = 88;
const gradeC = 76;
const gradeD = 64;
const gradeE = 52;
const gradeF = 40;

printOut("Student 1, points: " + pc1);

if(pc1 <= gradeF){
    printOut("You got an F");
}else if(pc1 <= gradeE){
    printOut("You got an E");
}else if(pc1 <= gradeD){
    printOut("You got a D");
}else if(pc1 <= gradeC){
    printOut("You got a C");
}else if(pc1 <= gradeB){
    printOut("You got a B");
}else if(pc1 <= gradeA){
    printOut("You got an A. Good job!");
}

printOut(newLine);
printOut("Student 2, points: " + pc2);

if(pc2 <= gradeF){
    printOut("You got an F");
}else if(pc2 <= gradeE){
    printOut("You got an E");
}else if(pc2 <= gradeD){
    printOut("You got a D");
}else if(pc2 <= gradeC){
    printOut("You got a C");
}else if(pc2 <= gradeB){
    printOut("You got a B");
}else if(pc2 <= gradeA){
    printOut("You got an A. Good job!");
}

printOut(newLine);
printOut("Student 3, points: " + pc3);

if(pc3 <= gradeF){
    printOut("You got an F");
}else if(pc3 <= gradeE){
    printOut("You got an E");
}else if(pc3 <= gradeD){
    printOut("You got a D");
}else if(pc3 <= gradeC){
    printOut("You got a C");
}else if(pc3 <= gradeB){
    printOut("You got a B");
}else if(pc3 <= gradeA){
    printOut("You got an A. Good job!");
}

printOut(newLine);
printOut("Student 4, points: " + pc4);

if(pc4 <= gradeF){
    printOut("You got an F");
}else if(pc4 <= gradeE){
    printOut("You got an E");
}else if(pc4 <= gradeD){
    printOut("You got a D");
}else if(pc4 <= gradeC){
    printOut("You got a C");
}else if(pc4 <= gradeB){
    printOut("You got a B");
}else if(pc4 <= gradeA){
    printOut("You got an A. Good job!");
}

printOut(newLine);
printOut("Student 5, points: " + pc5);

if(pc5 <= gradeF){
    printOut("You got an F");
}else if(pc5 <= gradeE){
    printOut("You got an E");
}else if(pc5 <= gradeD){
    printOut("You got a D");
}else if(pc5 <= gradeC){
    printOut("You got a C");
}else if(pc5 <= gradeB){
    printOut("You got a B");
}else if(pc5 <= gradeA){
    printOut("You got an A. Good job!");
}



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)
*/

printOut("Dice rolling");

const d1 = Math.ceil(Math.random() * 6);
const d2 = Math.ceil(Math.random() * 6);
const d3 = Math.ceil(Math.random() * 6);
const d4 = Math.ceil(Math.random() * 6);
const d5 = Math.ceil(Math.random() * 6);
const d6 = Math.ceil(Math.random() * 6);

let diceThrow = "";
diceThrow += d1.toString() + ",";
diceThrow += d2.toString() + ",";
diceThrow += d3.toString() + ",";
diceThrow += d4.toString() + ",";
diceThrow += d5.toString() + ",";
diceThrow += d6.toString();

diceThrow = "6,6,3,3,5,5";

printOut("diceThrow: " + diceThrow);

const count1 = (diceThrow.match(/1/g) || "").length;
const count2 = (diceThrow.match(/2/g) || "").length;
const count3 = (diceThrow.match(/3/g) || "").length;
const count4 = (diceThrow.match(/4/g) || "").length;
const count5 = (diceThrow.match(/5/g) || "").length;
const count6 = (diceThrow.match(/6/g) || "").length;

let diceCount = "";
diceCount += count1.toString() + ",";
diceCount += count2.toString() + ",";
diceCount += count3.toString() + ",";
diceCount += count4.toString() + ",";
diceCount += count5.toString() + ",";
diceCount += count6.toString() + ",";
printOut("diceCount: " + diceCount);

const equals1 = (diceCount.match(/1/g) || "").length;
const equals2 = (diceCount.match(/2/g) || "").length;
const equals4 = (diceCount.match(/4/g) || "").length;
const equals6 = (diceCount.match(/6/g) || "").length;
printOut("equals1: " + equals1.toString());
printOut("equals2: " + equals2.toString());
printOut("equals4: " + equals4.toString());
printOut("equals6: " + equals6.toString());


if(equals1 === 6){
    printOut("Full straight");
}else if (equals6 === 1){
    printOut("Yatzy");
}else if(equals2 === 1 && equals4 === 1){
    printOut("Tower");
}else if(equals2 === 3){
    printOut("3 par");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

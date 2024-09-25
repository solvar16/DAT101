"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* ¨
Use JavaScript to calculate the following expression, ensuring the result is -34:
2 + 3 * 2 - 4 * 6
Display both the original expression and the modified expression (with parentheses) along with their
results on the HTML page
*/

const result = 2 + (3 * (2 - 4)) * 6;
const result2 = "2 + (3 * (2 - 4)) * 6";

printOut("result = 2 + 3 * 2 - 4 * 6: " + result.toString());
printOut(result2 + "=" + eval(result2).toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* 
convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters/inch */
/*
(25.4 / 1000) * 25.34m
*/

const millInInch = 25.4;
const millInMeters = 1000;
const metres = 25.34;
const answer = (metres * millInMeters) / millInInch;
const exactAnswer = answer.toFixed(2);

printOut("answer = " + answer.toString());
printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* 
Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
task must be solved with primitives.
*/

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part2_Answer =
(3 * hoursInDay * minutesInHour) +
(12 * minutesInHour) +
14 + 
(45 / secondsInMinute);

printOut("part2_Answer = " + part2_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* 
Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives.
*/

const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days =" + part4_Days);

part4_Calc = part4_Calc - part4_Days
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours =" + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes =" + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinute;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Seconds =" + part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars"
*/
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round (amountUSD * NOK);
printOut(amountUSD + " dollars is " + amountNOK + " kroner ");
amountUSD = Math.round (amountNOK * USD);
printOut(amountNOK + " kroner " + amountUSD + " dollars ");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text
*/

let text = ("There is much between heaven and earth that we do not understand.")
printOut(text);

let length = text.length;
printOut ("Text length = " + text.length);
printOut ("Character at position number 19: " + text.charAt(19));
printOut ("characters from 35 and 8 forward are: " + text.substr(35, 8));
printOut ("index from earth and out is: = " + text.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?
*/

let nr1 = (5 > 3);
Boolean(nr1);
printOut("Is 5 greater than 3? " + Boolean(nr1));

let nr2 = (7>=7);
Boolean(nr2);
printOut("Is 7 greater than or equal to 7? " + Boolean(nr2));

let nr3 = ("a">"b");
Boolean(nr3);
printOut("Is a greater than b? " + Boolean(nr3));

let nr4 = ("1"<"a");
Boolean(nr4);
printOut("is 1 less than A? " + Boolean(nr4));

let nr5 = ("2500"<"abcd")
Boolean(nr5);
printOut("is 2500 less than ABCD? " + Boolean(nr5));

let nr6 = ("arne" != "thomas");
Boolean(nr6);
printOut("arne is not equal to thomas. " + Boolean(nr6));

let nr7 = ((2 === 5) === true);
Boolean(nr7);
printOut("2=5 is this statement true? ") + Boolean(nr7);
printOut(((2 === 5) === true).toString());

let nr8 = ("abcd">"bcd");
Boolean(nr8);
printOut("abcd is greater than bcd. Is this statement false? " + Boolean(nr8));


printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number
*/

const text1 = "254";
parseInt(text1);
console.log(parseInt(text1));

const text2 = "57.23";
parseFloat(text2);
console.log(parseFloat(text2));

const text3 = parseInt("25 kroner");
parseInt(text3);

printOut("Here are the converted values " + text1 + ", " + text2 + ", " + text3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360)
*/

let r = Math.floor(Math.random()*360)+ 1;
console.log(r);

printOut("Here is a random number between 1 to 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Use modulus (%) to calculate how many weeks and days are in 131 days
*/

let totalDays = 131;
totalDays = (totalDays / 7);
let totalWeeks = Math.floor(totalDays);
let rest = (totalDays%7);
console.log(rest);


printOut("Here is how many weeks and days there are in 131 days: " + totalWeeks.toFixed() + "uker " + rest.toFixed(0) + "dager ");
printOut(newLine);
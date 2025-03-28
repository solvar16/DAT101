"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString".
*/


function todaysDate(){
    const d = new Date();
    const option = {
        weekday: "long", 
        month: "long",
        day: "numeric",
        year: "numeric" 
    }
    
    let text = d.toLocaleDateString("no-NO", option);
    printOut(text);
    return d;
}
todaysDate();



printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation.

The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends
universe, launching on May 14th, 2025.

Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a
touch of visual excitement!

    Remember:
    ● This task isn't just about coding; it's about harnessing the power of dates and functions to create
      something both informative and engaging.
    ● Accuracy is key! Make sure your countdown is precise and your date formatting is impeccable.
    ● Creativity is encouraged! Let your passion for gaming and multimedia shine through in your output
*/

function daysLeft2XKO() {
    const d1 = todaysDate();
    const d2 = new Date("2025-05-14");
    const diff = Math.floor ((d2 - d1) / (1000 * 60 * 60 * 24));
    printOut("Days left until 2XKO is released: " + diff);
}

daysLeft2XKO();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Create a function that receives the radius of a circle and prints the diameter, circumference, and area*/

function calcRadius(radius){
    const diameter = radius * 2;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    printOut("The given radius of the circle is: " + radius);  
printOut(newLine);
    printOut("The diameter of the circle is: " + diameter.toFixed(3));
    printOut("The circumference of the circle is: " + circumference.toFixed(3));
    printOut("The area of the circle is: " + area.toFixed(3));
}
calcRadius(4);



printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.
*/

function rectangle(width, height){
    const circumference = width + width + height + height;
    const area = width * height;
    printOut("The width for this rectangle is " + width + "cm, and the height is " + height + "cm.");
    printOut("The circumference of the rectangle is therefore: " + circumference + "cm");
    printOut("The area of the rectangle is therefore: " + area + "cm²");
}
rectangle(10, 6);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. Formula:
    //Fahrenheit = (Kelvin - 273.15)*9/5 + 32;
    //celsius = Kelvin - 273.15
    //celsius = (Fahrenheit - 32)* 5/9;
*/

const ETemperatureType = {Celsius: 1, Fahrenheit: 2, Kelvin: 3}

function convertTemperature(aTemperature, aType){
    let Fahrenheit = 0;
    let Celsius = 0;
    let Kelvin = 0;

    switch(aType){
        case ETemperatureType.Celsius:
            printOut("Convert from Celsius: ");
            //convert to Fahrenheit
            //Fahrenheit = (Kelvin - 273.15)*9/5 + 32;

            Celsius = aTemperature;
            Fahrenheit = (Celsius * 9/5) + 32;
            Kelvin = Celsius + 273.15;
            break;
        case ETemperatureType.Fahrenheit:
            printOut("Convert from Fahrenheit:");

            Fahrenheit = aTemperature;
            Celsius = (Fahrenheit - 32)* 5/9;
            Kelvin = (Fahrenheit - 32)* 5/9 + 273.15;
            break;
        case ETemperatureType.Kelvin:
            printOut("Convert from Kelvin:");

            Kelvin = aTemperature;
            Celsius = Kelvin - 273.15
            Fahrenheit = (Kelvin - 273.15) * 9/5 + 32;
            break;
    }//End switch

    printOut("Celsius = " + Celsius.toFixed(0));
    printOut("Fahrenheit = " + Fahrenheit.toFixed(0)); //toFixed får vekk desimalene
    printOut("Kelvin = " + Kelvin.toFixed(0));

}//End function

convertTemperature(32, ETemperatureType.Celsius);
printOut(newLine);

convertTemperature(100, ETemperatureType.Fahrenheit);
printOut(newLine);

convertTemperature(300, ETemperatureType.Kelvin);



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100)
*/

//printOut("");

function calculateNetPrice(aPrice, aTaxGroup){
    let net = NaN; //kan også skrive NaN som else etter if på linje 174. (på linje 15, istedenfor else her. 
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;

    printOut("taxGroup = " + taxGroup);

    switch(taxGroup){
        case "NORMAL":
            vat = 25;
            break;
        case "FOOD":
            vat = 15;
            break;
        case "HOTEL, TRANSPORT, CINEMA":
            vat = 10;
            break;
    }
    if(!Number.isNaN(vat)){
        net = (100 * aPrice) / (vat + 100);
    }
  
    return net; 
}

const netPrice1 = calculateNetPrice(100, "normal");
if(Number.isNaN(netPrice1)){
    printOut("Unknown VAT group!");
}else{
    printOut("netPrice1 = " + netPrice1.toFixed(2));
}
printOut(newLine);


const netPrice3 = calculateNetPrice(200, "Food");
if(Number.isNaN(netPrice3)){
    printOut("Unknown VAT group!");
}else{
    printOut("netPrice3 = " + netPrice3.toFixed(2));
}
printOut(newLine);


const netPrice4 = calculateNetPrice(2000, "Hotel, transport, cinema");
if(Number.isNaN(netPrice4)){
    printOut("Unknown VAT group!");
}else{
    printOut("netPrice4 = " + netPrice4.toFixed(2));
}
printOut(newLine);


const netPrice2 = calculateNetPrice(100, "goblins");
if(Number.isNaN(netPrice2)){
    printOut("Unknown VAT group!");
}else{
    printOut("netPrice2 = " + netPrice2.toFixed(2));
}



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN (not a number)
*/

function convertSDT(speed, distance, time){
    const findSpeed = distance / time;
    const findDistance = speed * time;
    const findTime = distance / speed;
    if(speed === undefined && time === undefined){
        printOut("Speed and time is NaN");
        return NaN;
    }else if(distance === undefined && time === undefined){
        printOut("Distance and time is Nan");
        return NaN;
    }else if(distance === undefined && speed === undefined){
        printOut("Distance and speed is Nan");
        return NaN;
    }
    else if(speed === undefined){
        let speed = (distance / time);
        printOut("speed is: " + speed + "km/h");
        printOut("Distance is: " + distance + "km");
        printOut("Time is: " + time + "h");
    }else if(distance === undefined){
        let distance = (speed * time);
        printOut("speed is: " + speed + "km/h");
        printOut("Distance is: " + distance + "km");
        printOut("Time is: " + time + "h");
    }else if(time === undefined){
        let time = (distance / speed);
        printOut("speed is: " + speed + "km/h");
        printOut("Distance is: " + distance + "km");
        printOut("Time is: " + time + "h");
    }

}

convertSDT(5, undefined, undefined);




printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out.
*/

function modifyString(myText, maxSize, char, consecutiveInsert) {

    /*let myText = "Hello";
    let maxSize = 10;
    let char = "*";
    let consecutiveInsert = true;*/
    // If the text is already as large or larger than the max size, return it as is
    if (myText.length >= maxSize) {
        printOut(myText);
       
    }
    
    // Calculate how many characters need to be added
    let diff = maxSize - myText.length;

    // Create the string to be inserted (repeating the character 'diff' times)
    let insertText = char.repeat(diff);

    // Depending on the boolean flag, insert the characters before or after the text
    if (consecutiveInsert) {
        // Insert characters after the text
        printOut(myText + insertText);
      
    } else {
        // Insert characters before the text
        printOut(insertText + myText);
    
    }

}

// Example usage:
modifyString("Hello", 40, "*", true); // Outputs: "Hello*****"
modifyString("HEY", 40, "#", false); 




printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* From mathematics, we have the following expression:
1 + 2 = 3
4 + 5 + 6 = 7 + 8
9 + 10 + 11 + 12 = 13 + 14 + 15
16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24
25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35
Create a function or functions that can test this expression for 200 lines. If the test fails, print out where the
two sides are not equal and stop the loop. If all 200 lines are OK, print "Maths fun!"
*/

function testIfMathIsFun(){
    let operand = 1;
    let line = 1;
    //left side first

let ok = false;
do{
    let sumLeft = 0;
    for(let left = 0; left < line + 1; left++){
        sumLeft += operand;
        operand++;

    }
    let sumRight = 0;
    for(let right = 0; right < line; right++){
    sumRight += operand;
    operand++;
    }

    if(sumLeft !== sumRight){
        ok = false; //på en eller annen måte, må vi stoppe functions
        printOut("Error in line " + line.toString());
    
        }else{
        ok = true;

        }
        line++;

        if(line > 200){
            printOut("Math is fun!");
            break;
        }

        }while (ok);
        
}
testIfMathIsFun();



printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.
*/

function factorial (n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1);
}

function calculateAndPrintFactorial(num){
    const result = factorial(num);
    printOut("Factorial or " + num + " is:  " + result);
}
calculateAndPrintFactorial(7);




printOut(newLine);

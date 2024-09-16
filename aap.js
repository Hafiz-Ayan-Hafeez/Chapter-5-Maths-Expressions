var num1 = +prompt("Enter any Number");
var num2 = +prompt("Enter any Number");
var sum = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

var head = document.querySelector("#head");
head.innerHTML = "The Sum Of " + num1 + " and " + num2 + " is " + sum;

var head_1 = document.querySelector("#head_1");
head_1.innerHTML = "The Subtraction Of " + num1 + " and " + num2 + " is " + subtraction;

var head_2 = document.querySelector("#head_2");
head_2.innerHTML = "The Multiplication Of " + num1 + " and " + num2 + " is " + multiplication;

var head_3 = document.querySelector("#head_3");
head_3.innerHTML = "The Division Of " + num1 + " and " + num2 + " is " + division;

var head_4 = document.querySelector("#head_4");
head_4.innerHTML = "The Remainder Of " + num1 + " and " + num2 + " is " + modulus;

var value1 = 2;

var head_5 = document.querySelector("#value1");
head_5.innerHTML = "The Value After Variable Decleration is " +  value1;

var initialValue = 5;
var head_6 = document.querySelector("#initialValue");
head_6.innerHTML = "The Initial Value is " +  initialValue;

var initialvalue = initialValue + 1;
var head_7 = document.querySelector("#initialvalue");
head_7.innerHTML = "The Value after Increment is " + initialvalue;

var head_8 = document.querySelector("#num");
head_8.innerHTML = "The Value after Adding 7 in " + initialvalue;

var num1 = initialvalue + 7;
var head_9 = document.querySelector("#num1");
head_9.innerHTML ="The Output is " +  num1;

var decreament = num1 - 1;
var head_10 = document.querySelector("#decreament");
head_10.innerHTML = "The Value after Decrement is " + decreament;

var remainder = decreament % 3;
var head_11 = document.querySelector("#remainder");
head_11.innerHTML = "The Remainder Of " + decreament + " after dividing by 3 is:- " + remainder;

var movieTicket = 600;
var head_12 = document.querySelector("#movieTicket");
head_12.innerHTML = "Total cost to buy 5 tickets to a movie is " + movieTicket * 5;

var tableNum = 4;

var h3 = document.querySelector("#h3");
h3.innerHTML = "<b> The Table Of " + tableNum + " is:- <b>"  + "<br /> <br />";

h3.innerHTML += (tableNum + " * " + 1 + " = " + tableNum * 1) + "<br />";
h3.innerHTML += (tableNum + " * " + 2 + " = " + tableNum * 2) + "<br />";
h3.innerHTML += (tableNum + " * " + 3 + " = " + tableNum * 3) + "<br />";
h3.innerHTML += (tableNum + " * " + 4 + " = " + tableNum * 4) + "<br />";
h3.innerHTML += (tableNum + " * " + 5 + " = " + tableNum * 5) + "<br />";
h3.innerHTML += (tableNum + " * " + 6 + " = " + tableNum * 6) + "<br />";
h3.innerHTML += (tableNum + " * " + 7 + " = " + tableNum * 7) + "<br />";
h3.innerHTML += (tableNum + " * " + 8 + " = " + tableNum * 8) + "<br />";
h3.innerHTML += (tableNum + " * " + 9 + " = " + tableNum * 9) + "<br />";
h3.innerHTML += (tableNum + " * " + 10 + " = " + tableNum * 10) + "<br />";;

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
var temperature = document.querySelector("#temperature");
temperature.innerHTML = celsius + "` C is " + fahrenheit + "` F <br />";

var Fahrenheit = 70;
var Celsius = (Fahrenheit - 32) * 5/9;
var second_temperature = document.querySelector("#second_temperature");
second_temperature.innerHTML = Fahrenheit + "` F is " + Celsius + "` C "; 

var shopping = document.querySelector("#shopping");
shopping.innerHTML = "Shopping Cart <br /> <br />"

var itemPrice1 = 650;
var itemPrice2 = 100;
var itemQuantity1 = 3;
var itemQuantity2 = 7;
var shoppingChareges = 100;
var total = (itemPrice1 * itemQuantity1) + (itemPrice2 * itemQuantity2) + +shoppingChareges;

shopping.innerHTML += "Price of Item 1 is " + itemPrice1 + "<br />";
shopping.innerHTML += "Quantity of Item 1 is " + itemQuantity1 + "<br />";
shopping.innerHTML += "Price of Item 2 is " + itemPrice2 + "<br />";
shopping.innerHTML += "Quantity of Item 2 is " + itemQuantity2  + "<br />";
shopping.innerHTML += "Shopping Charges " + shoppingChareges  + "<br />";
shopping.innerHTML += "Total Cost of Your Order is " + total;

var markSheet = document.querySelector("#markSheet");
markSheet.innerHTML = "Mark Sheet <br /> <br />";

var totalMarks = 500;
var obtainedMarks = 437;
var percentage = obtainedMarks / totalMarks * 100;

markSheet.innerHTML += "Total Marks Are:- " + totalMarks + "<br />";
markSheet.innerHTML += "Obtained Marks Are:- " + obtainedMarks + "<br />";
markSheet.innerHTML += "Pecentage:- " + percentage + " % " + "<br />";

var currency = document.querySelector("#currency");
currency.innerHTML = "Currency In PKR <br /> <br />";

var US = 10 * 104.80;
var saudi = 25 * 28;
var totalCurrency = US + saudi;

currency.innerHTML += "Total Currency in PKR:- " + totalCurrency;

var airthmaticNum = 2;
var airthmaticExpression = airthmaticNum + 5 * 10 / 2;

var airthmatic = document.querySelector("#airthmatic");
airthmatic.innerHTML ="Airthmatic Expression of number " + airthmaticNum + " by  Adding 5 and multiply by 10 and divided by 2 " + "<br />" + airthmaticExpression;

var ageCalculator = document.querySelector("#ageCalculator");
ageCalculator.innerHTML = "Age Calculator <br /><br />";

var currentYear = 2024;
var birthYear = 2009;
var currentAge = currentYear - birthYear;

ageCalculator.innerHTML += "Current Year:- " + currentYear + "<br />";
ageCalculator.innerHTML += "Birth Year:- " + birthYear + "<br />";
ageCalculator.innerHTML += "Your Age is:- " + currentAge;

var geometry = document.querySelector("#geometry");
geometry.innerHTML = "The Geometrizer <br /><br />";

var radius = 20;
var cicumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

geometry.innerHTML += "Radius of a Circle:- " + radius + "<br />";
geometry.innerHTML += "The Circumference is:- " + cicumference + "<br />";
geometry.innerHTML += "The Area is:-" + area + "<br />";

var lifetimeCalculator = document.querySelector("#lifetimeCalculator");
lifetimeCalculator.innerHTML = "The Lifetime Supply Calculator <br /><br />";

var snack = "Lays";
var current_age = 15;
var maxAge = 65;
var amountOfSnack = 3;
var snackTotal = amountOfSnack * (maxAge - current_age);

lifetimeCalculator.innerHTML += "Favourite Snack:- " + snack + "<br />";
lifetimeCalculator.innerHTML += "Current Age:- " + current_age + "<br />";
lifetimeCalculator.innerHTML += "Estimated Maximum Age:- " + maxAge + "<br />";
lifetimeCalculator.innerHTML += "Amount Of Snacks per Day:- " + amountOfSnack + "<br />";
lifetimeCalculator.innerHTML += "You will need " + snackTotal + " Packets of " + snack + "To last you until the ripe old age of " + maxAge + "<br />";
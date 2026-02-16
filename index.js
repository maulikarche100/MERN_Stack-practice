//Practice of Statements and Conditions

let aged = 29;
if(aged > 18){
    console.log("you can vote");
}else
{
    console.log("you canoot vote");
}


//even or odd using if else conditions 
let num = 10;
if(num%2 === 0){
    console.log(num,"is even");
}else
{
    console.log(num,"is odd");
}


//ex 2 Marking System Using Else-If conditions:
let marks =90;
if(marks >= 80){
    console.log("First class with distinction");
}else if(marks >= 60 && marks <= 79){
    console.log("first class");
}else if(marks >= 40  && marks <= 69){
    console.log("second class");
}
else{
    console.log("Fail");
}

//ex  3: write a conditions using  Ternary Operators 
let age1= 14;
let calculate= age1 > 18 ? "Adult" : "Not Adult";
console.log(calculate); 












// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Loops and strings:
// For Loop
console.log("*********************For loop**********************");



// Q. To print Hello Mauli 100 times using for loop
for(let i=1 ; i<=10; i++){
    console.log("Hello Mauli")
}

// Q. Add Sum of first 10 numbers
let sum = 0;
for(let i=1; i<=10; i++){
    sum = sum+i;
}
console.log("sum of 10 numbers:",sum);


// Q. write a numbers from 1 to 10
for(let i=1; i<=10; i++){
    console.log("i = ",i);
}

//---------------------------------------------------------------
console.log("******************while loop**********************");
// Q . Sum 1 to 5 by using while loop
let sum1=0;
let i = 1;
while(i<=5){
    sum1 = sum1+i;
    i++;
}
console.log(sum1);

//Q. write a number from 1-10
let num1= 0;
while(num1<=10){
    console.log("Num:",num1)
    num1++;
}

console.log("**********************Do-While loop**********************");


let a = 1;
do{
    console.log("Hii New Loop Kaise Ho aap!")
    a++;
}while(a<=5)


let b = 1;
do{
    console.log("b = ",b)
    b++;
}while(b<=5)


console.log("************************For-Of Loop************************");

//Syntax:
/*
for(let val of strVar){
    do some work
}
*/

//Q. write a string of Name using For-Of Loop
let string="MauliiKarche";
for(let i of string){
    console.log("i =",i);
}





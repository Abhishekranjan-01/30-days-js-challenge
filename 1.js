// ACTIVITY-1 (Variable declaration)
// Task-1
// Declare a variable using var,assign it a number,and log the value to the console.
var var1 = 5;
console.log(var1);
// Task-2
// Declare a variable using let,assign it a string,and log the value to the console.
let var2 = "Steve";
console.log(var2);
// ACTIVITY-2 (Constant declaration)
// Task-3
// Declare a variable using const,assign it a boolean value,and log the value to the console.
const var3 = true;
console.log(var3);
// ACTIVITY-3 (Data types)
// Task-4
// Create variables of different data types (number,string,boolean,object,array) and log each variable's type using typeof operator.
const num = 5;
const string = "Steve";
const boolean = true;
const object = { name: "Steve" };
const array = [1, 2, 3, "end"];
console.log(typeof num, " value:\t", num);
console.log(typeof string, " value:\t", string);
console.log(typeof boolean, " value:\t", boolean);
console.log(typeof object, " value:\t", object);
console.log(typeof array, " value:\t", array);

// ACTIVITY-4 (Reassigning variables)
// Task-5
// Declare a variable using let,assign it an initial value,reassing a new value,and log both values to the console.
let var4 = "initial";
console.log("Inital value of let:\t", var4);
var4 = "last";
console.log("New value of let:\t", var4);

// ACTIVITY-4 (Understanding const)
// Task-5
// Try re-assigning a variable declared with const and observe the error.
const var5 = "const var5-1";
//var5 = "const var5-2"; // TypeError: Assignment to constant variable.

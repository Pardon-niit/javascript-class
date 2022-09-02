// variable declearation concept

// no space between the varable name 
// var = first name  //is wrong

// a variable should not start with a number 
// var = 455book //is wrong

// a variable should follow the following nameing convention
let firstname; // lowercase correct
let lastName; //camelCase correct
let FavoriteFood; //PascalCase usually researved for Class name
const SERVER = 8080; //UPPERCASE usualy reserved for constant
let route44; //Ends with number



// differences between VAR, LET and CONST 

// VAR can be redecleared and reassigned
var a = 10; //initial declaration
var a = 50; //redeclearation
a = 100; //rassigned

// LET cannot be redecleared but can be reassigned 
let b = 10; //initial declaration
// let b = 20; //error cannot be redecleared
b = 50; //reassigned successful

// CONST short for constant, cannot be redecleared or reassigned 
const c = 10; //initial declaration
// const c = 20; //error connot be redecleared
// c = 50; //error cannot be reassigned

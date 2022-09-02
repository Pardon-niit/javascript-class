//functions

function hello() {
  console.log("hello world");
}

// hello();

function mul(a = 1, b = 1) {
  console.log(a * b);
}
// mul(2, 5);
// mul(3, 5);
// mul(2, 15);
// mul(20);

function myName(name = "annonimous") {
  console.log(`hello ${name}`);
  // console.log("hello" + " " + name);
  // console.log("hello " + name);
}
// myName(prompt("Please Enter your Name: "));

function checkFirstLetter(str) {
  if (str.startsWith("b")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// checkFirstLetter("apple")
// checkFirstLetter("ball")

// The Return statement

function add(a, b) {
  return a + b;
}

let result = add(5, 20);
// console.log(result);

let a = 50;
let b = 10;
let c = a + b;
// console.log(c - add(5, 20));

function even(num) {
  if (num % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// even(1);
// even(2);
// even(124);
// even(252);
// even(1521);
// even(242358890);
// even(12523);
// even(2231);


function nege(num){
    if (num < 0){
        console.log("Negative");
    } else {
        console.log("positive");
    }
}

// nege(-37)
// nege(37)
// nege(-23)
// nege(23)


// anonymous function 
let mul = function(a, b){
    return a * b;
}

let xyz = 20;
let zyx = "xyz"
// console.log(xyz + mul(2, 2) + zyx);

// arrow function 
let div = (a, b) => {
    return a / b;
}

let div1 = (a, b) => a / b

// console.log(div(10, 2));

let even1 = x => {
    if (x % 2 === 0){
        console.log("even");
    } else{
        console.log("odd");
    }
}
// let even2 = x => x % 2 ? console.log("even") :  console.log("odd");
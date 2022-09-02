// The While Loop
// The syntax
//while(condition){
//do something
//}

let a = 0;
while (a < 10) {
  // console.log(a);
  a++;
}

let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let res = []; // even numbers
let b = 0;

while (b < arr.length) {
  if (arr[b] % 2 === 0) {
    res.push(arr[b]);
  }
  b++;
}
// console.log(res)

// The do while loop
// syntax
// do{
//     // expression
// } while (condition)
let c = 0;
do {
//   console.log(arr[c]);
  c++;
} while (c < arr.length);

// The For Loop
// Syntax
// for(Initialization; condidition; increament/decreament){
// expression
// }

let arr2 = [
  "ably",
  "back",
  "achy",
  "balk",
  "bank",
  "aery",
  "bark",
  "bask",
  "agly",
  "beak"
];
let res2 = [];
for (let i = 0; i < arr2.length; i++){
    if (arr2[i].endsWith("k")){
        res2.push(arr2[i]);
    }
}
// console.log(res2)

for (let i = 10; i >= 0; i--){
    // console.log(i)
}

// For oF loop

// syntax
// for (let item of items){
//     // expression 
// }
for (let arr of arr2){
    if (arr.endsWith("k")) console.log(arr)
}
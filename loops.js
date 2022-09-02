// The While Loop 
// The syntax 
//while(condition){
    //do something
//}

let a = 0;
while (a < 10){
    // console.log(a);
    a++;
}

let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let res = []; // even numbers
let b = 0;

while(b < arr.length){
    if (arr[b] % 2 === 0){
        res.push(arr[b]);
    }
    b++;
}
console.log(res)


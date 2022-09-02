const a = new Array();
let b = [];
// console.log(b);

let c = new Array("book", "laptop", "television", "pen", "paper")
let d = ["book", "laptop", "television", "pen", "paper"]
// console.log(d)

// some array properties
// .length

//some array method
// .join()
// .push()
// .pop()
// .shift()
// .unshift()
// .slice()
// .splice()

d.push("rice");
// console.log(d);
d.pop();
// console.log(d);
d.shift()
// console.log(d);
d.unshift("elephant")
// console.log(d);

//copying an element of an array
let e = d.slice(1, 3);
// console.log(d);
// console.log(e);


//removing an element from an array
let g = d.splice(1, 3);
// console.log(d);
// console.log(g);
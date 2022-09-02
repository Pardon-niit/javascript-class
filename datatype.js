//data type number
const a = Infinity;
const b = 3.14;

// console.log(a)
// console.log(typeof(a))

// data type BigInt
const c = BigInt(25);
const d = 3n;

// console.log(typeof(d));

//data type string
const e = "hello world"; //double quote string
const f = "hi hello hi javascript hi"; //single quote string
const g = "2 + 2 = " + (2 + 2);
const h = `hello world the answer to 2 + 2 = ${2 + 2}`;

//string properties and method
//.length
//.slice()
//.startWith()
//.replace()
console.log(f.length);
// console.log(f[0] + f[1] + f[2])
// console.log(f.slice(6));
// console.log(f.startsWith("hello"))
// console.log(f.replace("hi", "please"));

//data type of Null
const i = null;
// console.log(typeof i)

// data type of undefine
let j;
// console.log(j)

// data type of boolean
const k = true;
const l = false;

// console.log(typeof k)

// data type of object
const m = new Object();
const n = {
  "first name": "onyedikachi",
  Authenticated: false,
  sbc: ["pen", "book", NaN],
  xyz: { book: "Lord of the rings", author: "George Owell" },
};

//dot notation
// console.log(`ba${n.sbc[2]}a`.toLowerCase());

// bracket notation 
// console.log(n["Authenticated"]);

// changing the value of an object
// n.Authenticated = true; //dot notation
// n.sbc[1] = "paper"; //dot notation

n["Authenticated"] = true;
n["sbc"][2] = undefined;

// console.log(n.Authenticated);
// console.log(n.sbc)

// methods of an object 
// .hasOwnProperty()
// Object.keys()
// console.log(n["xyz"].hasOwnProperty("book"));
// console.log(Object.keys(n).length)

// deleting item from an object 
delete n.Authenticated

// console.log(n)


let food = "rice";

n["food"] = food;
n.food = "bread"
console.log(n)



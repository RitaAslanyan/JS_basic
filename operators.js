// comparison 
console.log("Comparison operators");


const x = 5;
const y = 8;
console.log("x =", x);
console.log("y =", y);

// ==
console.log("x==y", x == y);
console.log("2==2", 2 == 2);
console.log("x=='5'", x == "5");

// !=
console.log("x!=y", x != y);
console.log("5!=5", 5 != 5);
console.log("5!='5'", 5 != "5");

// ===
console.log("x===y", x === y);
console.log("2===2", 2 === 2);
console.log("x==='5'", x === "5");

// >
console.log("y>x", y > x);
console.log("2>2", 2 > 2);
console.log("y>'5'", y > "5");
console.log("arman" > "25");

// bitwise
console.log("Bitwise operators");
let a = 00000101;
let b = 00001011;
let c = 11111011;

console.log("a&b", a & b);
console.log("a|b", a | b);
console.log("a^b", a ^ b);
console.log("~a", ~a);
console.log("~c", ~c);
console.log("a<<3", a << 3);
console.log("c>>2", c >> 2);


// anhaskanali kam bard maseric mi qani orinak grel
// u mi erku orinak el grel priority-n cuyc talu hamar

// const preIncrement = (x) => {
//     x = x + 1;
//     return x;
// }

// const postIncrement = (x) => {
//     const y = x;
//     x = x + 1;
//     return y;
// }


const m = 5;
const n = 0;
const k = 0;
const l = 6;

console.log("m && n", m && n); // 0 (n)
console.log("n || m", n || m); // 5 (m)
console.log("m && l", m && l); // true
console.log("m || l", m || l); // 5 (m)
console.log("m && l || n && k || m", m && l || n && k || m); // true || 0 || 5 = true
// console.log("", );
// console.log("", );
// console.log("", );
// console.log("", );
// console.log("", );

console.log(Math instanceof Object);
console.log(String instanceof Object);


// 
// let age = 25;

// if (age >= 14 && age <= 90) {
//     console.log("yes");
// }

// if (age < 14 || age > 90) {}
// if (!(age >= 14 && age <= 90)) {}


// check the login
// let login = prompt("Input your login:", "");

// if (login === "Admin") {
//     let pass = prompt("Enter password", "");

//     if (pass === "TheMaster") {
//         console.log("Welcome!");
//     } else if (pass === "" || pass === null) {
//         console.log("Canceled");
//     } else {
//         console.log("Wrong password");
//     }

// } else if (login === "" || login === null) {
//     console.log("Canceled");
// } else {
//     console.log("I don't know you");
// }
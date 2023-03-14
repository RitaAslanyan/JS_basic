// function declaration
// problem 1
// variant 1 -> ?
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }

// variant 2 -> ||
// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
// }

// console.log(checkAge(25));
// console.log(checkAge(7));


// problem 2
// function min(a, b) {
//     return (a < b) ? a : b;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));


// problem 3
// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));
// console.log(pow(3, -2));


// Arrow functions
// 1
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask("Do you agree with me",
//     () => alert("You agreed"),
//     () => alert("You canceled the execution")
// );


//.. example of arrow function 
// let prod = (x, y) => x * y;
// console.log(prod(4, 8));

// example of function expression
// let prod = function(x, y) {
//     return x * y;
// }
// console.log(prod(5, 6));

// example of function declaration
// function prod(x, y) {
//     return x * y;
// }
// console.log(prod(5, 6));

// ..
// function prodOfArrElems(arr) {
//     let prod = 1;
//     for (let elem of arr) {
//         prod *= elem;
//     }
//     return prod;
// }

// console.log(prodOfArrElems([2, 3, 4, 5]));


// anonymous function
// ! function() {
//     console.log('Code runs!')
// }();
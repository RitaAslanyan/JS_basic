// for (let i = 2; i < 10; i++) {
//     if (i % 2 == 0) console.log(i);
// }

// let i = 0;

// while (i < 3) {
//     console.log(i);
//     i++;
// }

// let val;
// while (true) {
//     val = +prompt('Enter value greater than 100: ', '');

//     if (val > 100 || !val) break;

// }

// let n = 10;
// nextIter:
//     for (let i = 2; i <= n; i++) {

//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j == 0) {
//                 continue nextIter;
//             }
//         }

//         console.log(i);
//     }

// console.log("bye");

// let i = 0;
// let j = 10;
// checkiandj:
//     while (i < 4) {
//         console.log(i);
//         i += 1;
//         checkj:
//             while (j > 4) {
//                 console.log(j);
//                 j -= 1;
//                 if ((j % 2) === 0) {
//                     continue checkj;
//                 }
//                 console.log(j + ' is odd.');
//             }
//         console.log('i = ' + i);
//         console.log('j = ' + j);
//     }
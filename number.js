// ete unenq mec tiv, karox enq nerkayacnel ayspes
console.log("mec tveri nerkayacum");
console.log("23.5e7 =", 23.5e7);
console.log("1567892e-8 =", 1567892e-8);
console.log("\n");

// binary, octal, hexadecimal
console.log("binary, octal, hexadecimal");
console.log("0b1111 =", 0b1111);
console.log("0o0762 =", 0o0762);
console.log("0x67fad =", 0x67fad);
console.log("\n");

// toString(base) - "base"-akan hamakargov knerkayacni mer uzac tiv@
console.log("num.toString(base) method");
console.log("15..toString(2) =", 15..toString(2));
console.log("15..toString(8) =", 15..toString(8));
console.log("155..toString(16) =", 155..toString(16));
console.log("154557..toString(32) =", 154557..toString(32));
console.log("(155267895).toString(36) =", (155267895).toString(36));
console.log("\n");

// Rounding
console.log("Rounding");

let num1 = 3.28;
let num2 = 3.58;
let num3 = -3.28;
let num4 = -3.58;
let num5 = 5.782592157;

console.log("floor");
console.log("3.28 ->", Math.floor(num1));
console.log("3.58 ->", Math.floor(num2));
console.log("-3.28 ->", Math.floor(num3));
console.log("-3.58 ->", Math.floor(num4));
console.log("ceil");
console.log("3.28 ->", Math.ceil(num1));
console.log("3.58 ->", Math.ceil(num2));
console.log("-3.28 ->", Math.ceil(num3));
console.log("-3.58 ->", Math.ceil(num4));
console.log("round");
console.log("3.28 ->", Math.round(num1));
console.log("3.58 ->", Math.round(num2));
console.log("-3.28 ->", Math.round(num3));
console.log("-3.58 ->", Math.round(num4));
console.log("trunc");
console.log("3.28 ->", Math.trunc(num1));
console.log("3.58 ->", Math.trunc(num2));
console.log("-3.28 ->", Math.trunc(num3));
console.log("-3.58 ->", Math.trunc(num4));
console.log("toFixed(n)");
console.log("5.782592157 (1) ->", num5.toFixed(1));
console.log("5.782592157 (2) ->", num5.toFixed(2));
console.log("5.782592157 (3) ->", num5.toFixed(3));
console.log("5.782592157 (4) ->", num5.toFixed(4));
console.log("5.782592157 (5) ->", num5.toFixed(5));
console.log("\n");

console.log("tveri tarorinakutyunner -> erkuakan kerpapoxvelu patjarov arajacox poqr pochikner");
console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log("0.1.toFixed(20) =", 0.1.toFixed(20));
console.log("0.2.toFixed(20) =", 0.2.toFixed(20));
console.log("0.3.toFixed(20) =", 0.3.toFixed(20));
console.log("0.3 + 0.1 =", (0.3 + 0.1).toFixed(20));

let number1 = 0.1;
let number2 = 0.2;
let sum = +number1.toFixed(1) + +number2.toFixed(1);
console.log("number1.toFixed(1)", number1.toFixed(1));
console.log("+number1.toFixed(1)", +number1.toFixed(1));
console.log("sum", sum);
console.log("sum.toFixed(1)", sum.toFixed(1));

// xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx

//  x      xxxxxxx xxxx     xxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx
// + -     decimal point                           digits

console.log("2^52 =", Math.pow(2, 52));
console.log("2^52 =", Math.pow(2, 52).toString(2));
// chhaskaca

// 4503599627370496 bit
// 562949953421312 byte       sranic shat linelu depqum hamarvum a Infinity


console.log("\n");

// Infinity, -Infinity, NaN
console.log("+ - Infinity, NaN, isFinite, isNaN");
console.log("2^1023 =", Math.pow(2, 1023));
console.log("2^1024 =", Math.pow(2, 1024));
console.log("-2^1024 =", -Math.pow(2, 1024));
console.log("+'tiv1' + 20 =", +"tiv1" + 20);

console.log("isNaN('inchvorban2')", isNaN("inchvorban2"));
console.log("isNaN(24)", isNaN(24));
console.log("isNaN(NaN)", isNaN(NaN));

console.log("isFinite('inchvorban2')", isFinite("inchvorban2"));
console.log("isFinite('24')", isFinite("24"));
console.log("isFinite(24)", isFinite(24));
console.log("isFinite(24.5)", isFinite(24.5));
console.log("isFinite(Infinity)", isFinite(Infinity));
console.log("isFinite(NaN)", isFinite(NaN));
console.log("\n");

// parseInt, parseFloat
console.log("parseInt, parseFloat");

console.log("parseInt('200px') =", parseInt("200px"));
console.log("parseFloat('200px') =", parseFloat("200px"));
console.log("parseFloat('520.4euro') =", parseFloat('520.4euro'));
console.log("parseInt('520.4euro') =", parseInt('520.4euro'));
console.log("\n");

// qich m@ Math object
console.log(Math.sqrt(25));
console.log(Math.pow(2, 8));
console.log(Math.abs(-204));
console.log(Math.max(15, 24, -5, 6, 38, 957));
console.log(Math.min(15, 24, -5, 6, 38, 957));
console.log(Math.random());
console.log(Math.ceil(15..toString(2)));
console.log(Math.ceil("ddsh"));
console.log(Math.ceil("151515"));
console.log(Math.ceil(0x1526a));
console.log(Math.ceil(15..toString(16)));
console.log(Math.ceil(0b1101));


const bigint = BigInt(15616518645156484135415345156465645);
console.log(Infinity > bigint);
console.log(typeof Infinity);
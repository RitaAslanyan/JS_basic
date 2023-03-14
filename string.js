// localCompare()

// "use strict";

let singstr = 'hello my friend';
let doubstr = "hello hello my friendo";
let backstr = `backstick string
karam senc el grem
* karam liq@ ban tvarkem
* ${1+2} u senc artahaytutyun grem`;

let specstr = "nayev karam senc \nnor toxic ban grem";

console.log("singstr =", singstr);
console.log(doubstr);
console.log(backstr);
console.log(specstr);

console.log("length of 'hello my friend' =", singstr.length);

console.log("singstr[4] =", singstr[4]);
console.log("ete chka et index@ ->", singstr[36]);
console.log("nuyn@ charAt() ov klini datark string ->", singstr.charAt(36));

console.log("hertov piti tpi bolor tarer@");
for (let letter of singstr) {
    console.log(letter);
}

console.log("strings are immutable - bayc sxal a, ashxatum a, poxvum a, but why, but how? ");
// singstr[1] = 'k';
console.log(singstr[1]);

console.log("toUpperCase() -> republic of armenia".toUpperCase());
console.log("toLowerCase() -> ARMENIANS".toLowerCase());
console.log("armenia" [0].toUpperCase());

let str = "This is a string. This is a short string. This string is in double quotes."
console.log(str);
console.log("str.indexOf('is')", str.indexOf("is"));
console.log("str.indexOf('is', 6)", str.indexOf("is", 6));
console.log("str.lastIndexOf('is')", str.lastIndexOf("is"));

let target = "is";
let position = 0;

for (let ind of str) {
    ind = str.indexOf(target, position);

    console.log(ind);
    position = ind + 1;

    if (ind == -1) {
        break;
    }
}

console.log("includes, startsWith, endsWith");
console.log("Hello my friend".includes("rie"));
console.log("Hello my friend".includes("rie", 11));
console.log("Hello my friend".startsWith("rie"));
console.log("Hello my friend".startsWith("Hel"));
console.log("Hello my friend".endsWith("end"));
console.log("Hello my friend".endsWith("rien"));

console.log("\n");
console.log("slice, substring, substr");

let str2 = "veryveeerybigword";
console.log(str2);
console.log("str2.slice(4, 10)", str2.slice(4, 10));
console.log("str2.slice(4)", str2.slice(4));
console.log("str2.slice(-7, -4)", str2.slice(-7, -4));
console.log("str2.substring(4, 10)", str2.substring(4, 10));
console.log("str2.substring(10, 4)", str2.substring(10, 4));
console.log("str2.substr(13, 4)", str2.substr(13, 4));
console.log("str2.substr(-4, 4)", str2.substr(-4, 4));

const myStr = "That book is mine.";
console.log("myStr =", myStr);
const myNewStr = myStr.replace("is", "is not")
console.log('myStr.replace("is", "is not") =', myNewStr);
console.log('myStr.replace("IS", "is not") =', myStr.replace("IS", "is not"));
console.log('myStr.replace(/IS/i, "is not") =', myStr.replace(/IS/i, "is not")); // for case insensitive

const newString = "Do you want coffee or coffee?";
console.log("newString =", newString);
console.log('newString.replace("coffee", "tea")', newString.replace("coffee", "tea"));
console.log('newString.replace(/coffee/g, "tea")', newString.replace(/coffee/g, "tea"));


const strIng1 = singstr.concat(". ", myStr, " ", newString, " ", "bye bye.");
console.log(strIng1);

const ankapStr = "     animast bacatnerov string      ";
console.log("ankapStr ->", ankapStr);
console.log("ankapStr.trim()) ->", ankapStr.trim());

const aString = "Hello. I am from Armenia. I love my country very much.";
const arrayFromString = aString.split(".");
console.log(arrayFromString);
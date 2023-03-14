// task 1
// let datef = new Date(2012, 1, 20, 3, 12);
// console.log(datef);


// task 2

// vat tarberak
// function getWeekDay(date) {
// let day = date.getDay();
// switch (day) {
//     case 0:
//         day = "SU";
//         break;
//     case 1:
//         day = "MO";
//         break;
//     case 2:
//         day = "TU";
//         break;
//     case 3:
//         day = "WE";
//         break;
//     case 4:
//         day = "TH";
//         break;
//     case 5:
//         day = "FR";
//         break;
//     case 6:
//         day = "SA";
//         break;
// }

// return day;
// }

// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

//     return days[date.getDay()];
// }

// let d2 = new Date(2012, 0, 3);
// console.log(getWeekDay(d2));


// task 3

// function getLocalDay(date) {
//     let day = date.getDay();

//     if (day == 0) {
//         day = 7;
//     }

//     return day;
// }

// let d3 = new Date(2012, 0, 8);
// console.log(getLocalDay(d3));
// let d4 = new Date(2012, 0, 9);
// console.log(getLocalDay(d4));


// task 4
// function getDateAgo(date, days) {
//     let newDate = new Date(date);

//     newDate.setDate(newDate.getDate() - days);
//     return newDate.getDate();

// }

// let date = new Date(2015, 0, 2);
// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));


// task 5
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     // date.setDate(date.getDate() - 1);

//     return date.getDate();
// }

// console.log(getLastDayOfMonth(2022, 7));
// console.log(getLastDayOfMonth(2012, 1));
// console.log(getLastDayOfMonth(2022, 9));


// task 6
// function getSecondsToday() {
//     // hour * 3600 + minute * 60 + second
//     let now = new Date();
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
//     return (now - today) / 1000;
// }

// console.log(getSecondsToday());


// task 7
// function getSecondsToTomorrow() {
//     let now = new Date();
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//     return (tomorrow - now) / 1000;
// }

// console.log(getSecondsToTomorrow());


// task 8
// function formatDate(date) {

//     let diffSec = (new Date() - date) / 1000;

//     if ((diffSec) < 1) {
//         return "right now";
//     } else if ((diffSec) < 60) {
//         return `${diffSec} sec. ago`;
//     } else if ((diffSec / 60) < 60) {
//         return `${diffSec / 60} min. ago`;
//     } else {
//         return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
//     }

// }

// console.log(formatDate(new Date(new Date - 1)));
// console.log(formatDate(new Date(new Date - 30 * 1000)));
// console.log(formatDate(new Date(new Date - 24 * 60 * 1000)));
// console.log(formatDate(new Date(new Date - 16 * 24 * 60 * 60 * 1000)));


// other solution
// function formatDate(date) {
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let dayOfMonth = date.getDate();
//     let hour = date.getHours();
//     let minutes = date.getMinutes();
//     let diffMs = new Date() - date;
//     let diffSec = Math.round(diffMs / 1000);
//     let diffMin = diffSec / 60;
//     let diffHour = diffMin / 60;

//     year = year.toString().slice(-2);
//     month = (month < 10) ? '0' + month : month;
//     dayOfMonth = (dayOfMonth < 10) ? '0' + dayOfMonth : dayOfMonth;
//     hour = (hour < 10) ? '0' + hour : hour;
//     minutes = (minutes < 10) ? '0' + minutes : minutes;

//     if (diffSec < 1) {
//         return "right now";
//     } else if (diffMin < 1) {
//         return `${diffSec} sec. ago`;
//     } else if (diffHour < 1) {
//         return `${diffMin}  min. ago`;
//     } else {
//         return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
//     }
// }

// console.log(formatDate(new Date(new Date - 1)));
// console.log(formatDate(new Date(new Date - 30 * 1000)));
// console.log(formatDate(new Date(new Date - 24 * 60 * 1000)));
// console.log(formatDate(new Date(new Date - 16 * 24 * 60 * 60 * 1000)));
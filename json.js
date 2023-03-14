// JSON.stringify()

// let obj = {
//     name: "Narbe",
//     age: 43,
//     hairColor: "brown",
//     profession: "programmer",
//     family: {
//         wife: "Nare",
//         children: ["Mane", "Nane"],
//     },
//     collage: undefined
// };

// let jsonObj = JSON.stringify(obj, null, 2);
// console.log(jsonObj);


// circular structure
// let man = {
//     name: "Grigor",
//     age: 21
// };

// let woman = {
//     name: "Rita",
//     age: 22
// };

// man.wife = woman;
// woman.husband = man;

// let toJson = JSON.stringify(man); // Error
// console.log(toJson);

// let jsonWithArray = JSON.stringify(woman, ['name', 'age'], 2);
// console.log(jsonWithArray);

// let jsonWithFunc = JSON.stringify(woman, function replacer(key, value) {
//     // console.log(`${key}: ${value}`);
//     return (key == 'husband') ? undefined : value;

// }, 2);
// console.log(jsonWithFunc);



// JSON.parse()

// let str = `{
//     "meetup": [
//         {"title":"meeting","date":"2017-11-30T12:00:00.000Z"},
//         {"title":"myBirthday","date":"2005-06-25T22:00:21.000Z"}
//     ]
// }`;

// let schedule = JSON.parse(str); // will be error, because date is a string,  not a date object 
// console.log(schedule.meetup[0].date.getDate());

// let newSchedule = JSON.parse(str, function(key, value) {
//     if (key == "date") {
//         return new Date(value);
//     }
//     return value;
// });
// console.log(newSchedule.meetup[0].date.getDate());



// task 1
// let user = {
//     name: "John Smith",
//     age: 35
// };

// let json = JSON.stringify(user)
// console.log(json);

// let obj = JSON.parse(json);
// console.log(obj.name);


// task 2
// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Conference",
//     occupiedBy: [{ name: "John" }, { name: "Alice" }],
//     place: room
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
// }));
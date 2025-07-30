"use strict";

// let a = 1;
// function muFunc() {
//   let a = 2;
//   console.log("func a = ", a);
// }
// const { strict } = require("assert");
// console.log("before a = ", a);
// myFunc();
// console.log("a=", a);
// let plus = 0;
// let rez = ''
// rez += '<div>'
// let b = 3;
// const a = b + 1;
// console.log(a);
// b = 4;
// console.log(a);
//деструктуризація
// const num1 = 10;
// const num2 = 1;
// console.log(num1, num2);
// let from = num1,
//   to = num2;
// let s = 0;
// if (from > to) {
//   from = num2;
//   to = num1;
// }
// if (from < to) {
//   for (let i = from; i <= to; i++) {
//     s += i;
//   }
// } else {
//   for (let i = to; i <= from; i++) {
//     s += i;
//   }
// }
// console.log(s);
// function sumAll(a, b, ...c) {
//   console.log(arguments);
//   console.log(a, b, c);
//   const s = a + b;
//   return s;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
// console.log(sum(2, 3));
// console.log(sum(123, 456));
// function createUser(name, age, role) {
//   return {
//     name: name,
//     age: age,
//     role: role,
//   };
// }
// console.log(createUser("Bob, 25, manager"));
function sum(a, b) {
  return a + b;
}

var sum2 = function sum2(a, b) {
  return a + b;
};

var sum3 = function sum3(a, b) {
  return a + b;
};
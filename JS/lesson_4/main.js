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
  //function declaration
  console.log(this);
  return a + b;
}

const sum2 = function (a, b) {
  //function expression
  console.log(this);
  return a + b;
};

const sum3 = (a, b) => a + b; //стрілкова функція
console.log(this);
return a + b;

const obj = {
  a: 1,
  b: 2,
  sum: function () {
    console.log(this);
    return this.a + this.b;
  },
};

console.log(obj.sum());
console.log(obj.sum2());

setTimeout(function () {
  alert("123");
}, 2000);

// чиста функція (має один і  той самий результат, не викликає нових функцій, універсальна)

// const sum = function (a, b) {
//   return a + b;
// }

// function sum4(a, b) {
//   return a + b;
// }

// sum(1,2, 'l')
// sum(1,2, 'км')

// 6 = 1+2+3 // досконале число

// function isPerfectNumber (n){
//     const msg = isPerfectNumber (n) ? 'є' : 'не є'
//     alert (msg)
// }

// IIFE

(function () {
  const a = 1,
    b = 2;
  const sum = a + b;
})();

function onLoad() {
  const a = 1,
    b = 2;
  const sum = a + b;
}

onLoad();

// 5! = 1*2*3*4*5 // факторіал

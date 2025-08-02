// функціі рекурсивна

// function sayHi() {
//   let name = prompt("enter your name");
//   if (name === null) return;
//   name = neme.trim();
//   console.log(Name);

//   if (name !== "") {
//     alert(`Hello, ${name}!`);
//   } else {
//     sayHi;
//   }
// }

// sayHi();

// const catlog = [
//     {
//         name: 'техніка',
//         children: [
//             {
//                 name: 'телевізори'
//             }
//         ]
//     },
//     {
//         name: 'для кухні',
//         children: [
//             {
//                 name: 'холодильники'
//                 children: []
//                     {
//                 name: 'двокамерні'
//             }
//         ]
//             },
//             {
//                 name: 'холодильники'
//             },
//         ]
//     }
// ]
function showCatalog() {
  let html = "<ul>";
}

function showCatalog(catalogList) {
  console.log(catalogList);
}
let html = "<ul>";
for (let i = 0; i < showCatalog.length; i++) {
  html += "<li>" + catalogList[i].name;
  if (catalogList[i].children) {
    html += showCatalog(catalogList[i].children);
  }
  html += "</li>";
}
html += "</ul>";

document.getElementById("rez").innerHTML = html;
return html;

document.getElementById("rez");

const rez = [1, 1];
const len = 10;
function fibonachi() {
  if (rez.length < len) {
    rez.push(rez[rez.length - 1] + rez[rez.length - 2]);
  } else {
    fibonachi();
    console.log(...rez);
  }
}
fibonachi();

function showName(name, how) {
  if (how === "alert") {
    alert(`Hello, $ {name}!`);
  } else if (how === "log") {
    console.log(`Hello, $ {name}!`);
  }
}

function showName(name, callback) {
  const str = `Hello, $ {name}!`;
  callback(str);
}

showName("Bob", (s) => alert(s));

function initSlider(onBeforeInit) {
  onBeforeInit;
}
onBeforeInit();
//...
onAfterInit();

// Колбек функція предається в якості аргумента

[1, 2, 3, 4, 5, 6].find();

showName("Ann", (s) => console.log(s));

console.log([1, 2, 3, 4, 5, 6].find(el));

function showResult(what, where) {
  document.getElementById(where).innerHTML = what;
}
showResult("HELLO!!!", "rez");
showResult("JS is Awesome!!!", "rez2");

function addToCart($btn) {
  console.log($btn.dataset);
  showResult("Product id = " + $btn.dataset.id, "rez123");
}

// функціі вищого порядку

// функція замикання
function boxFruit() {
  const fruits = ["apple", "banana", "kiwi"];

  function showFruits(n) {
    return fruits[n];
  }
}

const showFruit = boxFruit();
console.log(showFruit(2));
console.log(showFruit(0));

function addNumber(number) {
  return function (a) {
    return number + a;
  };
}

const add100 = addNumber(100);
const add10 = addNumber(10);
const add25 = addNumber(25);

console.log(add100(1));
console.log(add100(45));
console.log(add100(15));

//.......
function weekDay() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  let i = -1;
  return function () {
    i = i == 6 ? 0 : i + 1;
    return days[i];
  };
}
const showDay = weekDay();

console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());
console.log(showDay());

// class User {
//     constructor(name){
//         this.name = name
//     }
// }
// showName(){
//     return this.name
// }

// рекурсивні функції, колбек функції (функції зворотнього виклику), замикання функції.

"use strict";

//function myFunc
//1 == '1' //tru
//1 === '1' //false
//1 === parseInt('1')  //true
// 1+'' === '1' //true
//parseInt ('10px') //10
//parseFloat ('10.5rem')//10.5
// <> != !== >= <=  оператори які часто використовуються
var sum = 1234;
var deliveryPrice = 0;

if (sum <= 5000) {
  deliveryPrice = 500;
}

var discount = 0;

if (sum < 200 && sum < 500) {
  discount = 2;
} else if (sum > 500 && sum < 1000) {
  discount = 5;
} else if (sum >= 1000) {
  discount = 10;
} //need refactoring
//INFO
//TODO (TODO Highlight)
// '' 1 && 0


var isShowPromo = false; //[true]

function ShowPromoBlock() {}

console.log(confirm("Delete something?"));
_________________;
var usermame = document.getElementById("usermame").ariaValueMax;
console.log(usermame);
var greetingText = "Hello, ".concat(usermame, "!");
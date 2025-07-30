"use strict";

// const API_KEY = '1234vnfjbjfnbjdnbjnf88'
// console.log("a = " + a);
var a = 10;
console.log("a = " + a); // a = 20
// console.log("a = " + a)

function myFunc() {
  var b = 20;
  console.log("a from func = " + a);
  console.log("b from func = " + b);

  function innerFunc() {
    console.log("b from inner func =" + b);
  }

  innerFunc();
} // console.log('b fefore func = ' + b)


myFunc(); // console.log('b after func = ' + b)
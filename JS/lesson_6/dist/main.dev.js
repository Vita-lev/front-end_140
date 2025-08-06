"use strict";

var car = {
  brand: "Ford",
  model: "scorpio",
  year: 2000,
  capasity: 2.0,
  color: "white",
  hatch: true,
  driver: ["Alex", "Olena"],
  options: {
    climatControl: true,
    ABS: true,
    EBD: true
  },
  maxSpeed: 220,
  avgSpeed: 120,
  calcTime: function calcTime(distanse) {
    return (distans / this.avgSpeed).toFixed(2);
    return this.result;
  }
};
console.log(car.calcTime(1000));
console.log(car); // const obj = new Object();
// const idProp = Symbol('id')

const car = {
    // Symbol(id): 123,
    11: 'bar',
    'якась властивість': 'якесь значення',
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
    EBD: true,
  },
  maxSpeed: 220,
  avgSpeed: 120,
  calcTime: function (distanse) {
    return (distans / this.avgSpeed).toFixed(2);
    return this.result;
  },
};

console.log(car.calcTime(1000));
console.log(car);

// const obj = new Object();

// const response = await fetch()
// const success = response
'якась властивість' = 'якесь значення'

const uk = {
    'головна':'головна',
    'вкажіть номер телефону':'вкажіть номер телефону'
}

const en = {
    'головна':'home'
}

function trans(translate) {
    return translate[phrase]
}
console.log(trans('головна',uk))
console.log(trans('вкажіть номер телефону',en))

const needProp = 'option'
console.log(car[11]);
console.log(car[needProp]?.ABS || '--/--/----');
console.log(car[11]);
console.log(car('якась властивість'));

car.newParam = 'Foo'
// const needProp = 'color'
car.maxSpeed = 350
Object.isFrozen(car) ? (car.maxSpeed = 360) : console.warm('car is frozen')
Object.freezee(car)

// delete car.brand



for(let key in car){
    if (typeof car[key] =='string' || typeof car[key] == 'number')
    console.log(`${key} = ${car[key]}`)
}

Object.seal(car)
!Object.isSealed(car)

Object.entries(car)

Object.defineProperty(car,)




const obj1 = {
    a:1,
    b:2,
    c: {
        d:4,
        e() {
            alert('hello')
        }
    }
}

// const obj2 = Object.assign({}, obj1)

// const obj2 = JSON.parse(JSON.stringify(obj1))

// const obj2 = structuredClone(obj1)

obj2.a = 10
obj2.c.d = 3

console.log(obj1);
console.log(obj2);

const obj2 = clone(obj1)

const time = {
    h: 0,
    m: 0,
    s: 0
}
function addSecond (time, sec){
    return {
        h: calcH,
        m: calcM,
        s: calcS,
    }
}

const newTime = addSeconds(time,sec)




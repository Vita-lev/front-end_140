// if (2 > 1) {
// } else

// isEven оператор
function isEven(n) {
  if (n % 2 === 0) {
    console.log("парне");
  } else if (n % 2 === 0) {
    console.log("не парне");
  } else {
    console.log("не число");
  }
}

// return

function isEven(n) {
  if (n % 2 === 0) {
    return "парне";
  } else if (n % 2 === 0) {
    return "не парне";
  } else {
    return "не число";
  }
}

function isEven(n) {
  let symbol = "";
  if (n === 1) {
    symbol = "!";
  }
  if (n === 2) {
    symbol = "@";
  }
  if (n === 3) {
    symbol = "#";
  } else {
    symbol = "value 0...9";
  }
  document.getElementById("rez").innerText = symbol;
}

function getSymbol2(n) {
  let symbol = "";
  switch (n) {
    case 1:
      symbol = "!";
      break;

    case 2:
      symbol = "@";
      break;

    case 3:
      symbol = "#";
      break;

    default:
      symbol = "unexpected valye";
  }
  document.getElementById("rez").innerText = symbol;
}

// 28-07-2025

switch (m) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
    days = 31;
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;

  case 2:
    if (leapYear(y)) {
      days = 29;
    } else {
      days = 28;
    }
    break;
}

if (m === 1 || m === 3 || m === 5)
  switch (action) {
    case "edit_news":
      $news = getNewsData();
    case "add_news":
      pageTemplate = "news_page.html";
      break;
  }

// const n = '2'
// switch (true) {
//     case n % 2===0 :// ❌ не можна умови всередині case
//     console.log('Even')
//     break;
//     case n % 2!===0 :
//     console.log('Odd')
//     break;
//     default:
//     console.log('Not A Number');
//     break;

// }

// Твій switch має синтаксичну помилку — так не можна писати умови в case.
// У switch кожен case порівнюється з конкретним значенням, а не виконує перевірку умови.


// цикли

let i = 0;
while(i<10){
    console.log(i)
    i++

    console.log(i)
}

// let i = 0;
// while(confirm("go next?")){
//     console.log(i)
//     i++

//     console.log(i)
// }


do {
i++

console.log(i)
}while (i<10)

let html="<div class=board">
    for (let i =1;i<=8;i++){
        for (let j =1;j<=8;j++){
        console.log(i)
    let isDark = (i +j) % 2 ! ==0
    html += `div class ='cell${isDark ? 'dark':''}">${i};${j}</div>`
}
}
html +='</div>'

document.getElementById("rez").innerHTML = html

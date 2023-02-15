// "use strict";

// ***********************************************************************Lecture

// let operand1 = +prompt('operand1');
// let sign = prompt('sign');
// let operand2 = +prompt('operand2');
// let result; // undefined

// function sum(a, b) {
//   return a + b
// }

// function calc() {
//   if (sign == '+'){
//     result = sum(operand1,operand2)
//   }
//   console.log(result);
// }
// calc()
// document.write(result);






//Більш універсальна, рахує одразу те що задекларували в calc( )
// let sign = prompt('sign');
// let result; // undefined

// function sum(a, b) {
//   return a + b
// }

// function calc(number1,number2,) {
//   if (sign == '+'){
//     result = sum(number1,number2)
//   }
//   console.log(result);
// }
// calc(3,5)//8
// document.write(result);



        // function add(a, b) {
        //     return a + b;
        // }

        // function sub(a, b) {
        //     return a - b;
        // }

        // function mul(a, b) {
        //     return a * b;
        // }

        // function div(a, b) {
        //     return a / b;
        // }

        // var operand1 = +prompt("Введите первое число: ");
        // var sign = prompt("Введите знак арифметической операции: + - * /");
        // var operand2 = +prompt("Введите второе число: ");
        // var result;

        // switch (sign) {
        //     case "+":
        //         result = add(operand1, operand2);
        //         break;
        //     case "-":
        //         result = sub(operand1, operand2);
        //         break;
        //     case "*":
        //         result = mul(operand1, operand2);
        //         break;
        //     case "/":
        //         result = div(operand1, operand2);
        //         break;
        //     default:
        //         document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
        // }

        // if (result != undefined) {
        //     document.write("Результат операции: " + result);
        // }






        //     let maxValue = -Infinity; // найменше значення (число )


//     function getMaxValue(){
//         for(i=0;i<arguments.length;i++){
//            if(arguments[i]>maxValue){
//             maxValue = arguments[i];
//            }
//         }
        
//       document.write(maxValue);
//     }
// getMaxValue(-222, 3, -4, 10, 20, -8);//20

// ***********************************************************************Lecture fin






    // 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
    //    Функция должна расчитывать результат операции, исходя из переданного ей знака. 
    //    Функция должна проверять корректность введенных чисел и знака операции.
    //    Все аргументы для функции принять от пользователя.

// function calculate(operand1, operand2, sign) {
//   let result;
//   if (isNaN(operand1) || isNaN(operand2)) {
//     alert('Даний аргумент не є числом. Error!!!');
//     return;
//   }
//   switch (sign) {
//     case '+':
//       result = operand1 + operand2;
//       break;
//     case '-':
//       result = operand1 - operand2;
//       break;
//     case '*':
//       result = operand1 * operand2;
//       break;
//     case '/':
//       result = operand1 / operand2;
//       break;
//     default: alert('Операція не дійсна - Error');
//       return;
//   }
//   return result;
// }

// let operand1 = +prompt('Введіть перше число:');
// let operand2 = +prompt('Введіть друге число:');
// let sign = prompt('Введіть відповідний знак: + - * /');
// result = calculate(operand1, operand2, sign);
// if (result != undefined) {
//   alert(result);
// }
    


    
    // 2.  Создать игру "Камень-Ножницы-Бумага".
    //     Выбор компьютера определяется строкой:  
    //     "var computerChoice = Math.random();
    //     alert(computerChoice);".
    //     Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.

function game() {
}
let userChoice = prompt("Що вибираєте: камінь, ножниці чи бумага?").toLowerCase();//Метод toLowerCase()перетворює рядок на малі літери.
let computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "камінь";
} else if(computerChoice <= 0.67) {
    computerChoice = "бумага";
} else {
    computerChoice = "ножниці";
}

document.write("<p>Ваш вибір: " + userChoice + "</p>");
document.write("<p>Вибір компьютера: " + computerChoice + "</p><br>");

var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    document.write("Нічия!");
  } else if (choice1 === "камінь") {
    if (choice2 === "ножниці") {
      document.write("Ви перемогли.");
    }
    else if (choice2 === "бумага") {
      document.write("Ви програли.");
    }
  } else if (choice1 === "бумага") {
    if (choice2 === "камінь") {
      document.write("Ви перемогли.");
    }
    else if (choice2 === "ножниці") {
      document.write("Ви програли.");
    }
  } else if (choice1 === "ножниці") {
    if (choice2 === "камінь") {
      document.write("Ви програли.");
    }
    else if (choice2 === "бумага") {
      document.write("Ви перемогли.");
    }
  }
} 
// HTMLElement.write(compare(userChoice, computerChoice));
// document.re;
compare(userChoice, computerChoice);


    
    
    // 3. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.
// function fibonatsi(n) {
//   let a = 0, b = 1, c;
//   if (n <= 0) {
//     return NaN;
//   } else if (n == 1) {
//     return a;
//   } else if (n == 2) {
//     return b;
//   }
//   for (let i = 0; i < n - 2; i++){
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return c;
// }    
// n = +prompt('Введи число n:');
// alert(fibonatsi(n));


    // 4. Зробіть так, щоб користувач вводив різний текст для кожної комірки prompt//

// function drawTable(col,row,text){
//   document.write('<table border="1">');
//   for (let i = 0; i < row; i++){ 
//       document.write('<tr>')
//       for (let i = 0; i < col; i++){
//         let text = prompt('Введіть значення кожної комірки');
//         document.write(`<td>${text}</td>`);
//     }
//     document.write('</tr>')
//     }
//     document.write('</table>')    
// }

// let tr = +prompt('tr');
// let td = +prompt('td');

// drawTable(td, tr);












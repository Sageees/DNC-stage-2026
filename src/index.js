console.log(process.argv);
const num1 = process.argv[2];
const num2 = process.argv[3];
console.log('num1', num1);

// console.log("Hello world!");
// //esempio stringhe
// const name = "Loris";
// const Name = "Gigi";
// const surname = "beltramo";
// const age = 17;
// const fullName = `My name is ${name} ${surname}`;
// const fullname = name + Name;

// console.log(fullname);

// //esempio numeri
// let num = 10;
// let Num = 20;
// let sum = num + Num;
// let sot = Num - num;
// let div = Num / num;
// let mul = Num * num;
// let div2 = Num % num;

// //esempio array e ciclo for
// const resultsOp = [num, Num, sum, sot, div, mul, div2];
// for (let i = 0; i < resultsOp.length; i++) {
//   console.log(resultsOp[i]);
// }

// //esempio boolean
// const x = 5;
// console.log(x == 8);
// console.log(x > 0);

// //esempio object
// // const nissan = new Object({
// //   colore: "nero",
// //   modello: "GT-R R35",
// //   cavalli: 480,
// // });
// const nissan = {
//   colore: "nero",
//   modello: "GT-R R35",
//   cavalli: 480,
// };
// console.log(nissan["colore"]);
// console.log(nissan.cavalli);
// let max = num;

// //esempio if e forof
// for (op of resultsOp) {
//   if (max < op) {
//     max = op;
//   }
// }
// console.log("ecco il numero più grande nell'array : " + max);

// //esempio if else
// for (let index = 0; index < resultsOp.length; index++) {
//   const op = resultsOp[index];
//   if (op) {
//   }
// }
// // for (i = 0; i < 12; i++) {
// //   if (num < Num) {
// //     console.log("numero ancora troppo piccolo");
// //     num++;
// //   } else {
// //     console.log("il numero finalmente è grande abbastanza" + num);
// //   }
// // }

// // if ternario
// // condizione ? true : false;
// const verify = age > 18 ? "maggiorenne" : "minorenne";

// console.log(verify);

// const math = require("./function.js");
// console.log(math.sum(5, 3));

const math = require("./processicalc.js");

const num1 = process.argv[2];
const num2 = process.argv[3];

const op = process.argv[4];
if(num2 === Number){

if (op === "M") {
  console.log(math.mul(num1, num2));
} else if (op === "A") {
  console.log(math.add(num1, num2));
} else if (op === "S") {
  console.log(math.sot(num1, num2));
} else if (op === "D") {
  console.log(math.div(num1, num2));
}
}
else if(num2 === 'S'){
    console.log(math.radice(num1));
}



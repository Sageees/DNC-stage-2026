function moltiplicazione(altezza, base) {
  const risultato = altezza * base;
  return risultato;
}

console.log(moltiplicazione(5, 10));

function sum(a, b) {
  return a + b;
}
let sum1 = sum(5, 10);
let sum2 = sum(2, 3);
console.log(sum1 + " " + sum2);

const person = {
    name: "Raul",
    age: "18",
    nickName: "Ungu",
    bio : function(){
        return console.log("mi chiamo "+this.name+ " ho " + this.age + " anni ed il mio nickname e' "+ this.nickName);
    }
}
console.log(person.bio());


const f1 = ()=>{

}
const f2 = (a, b)=>{
return a + b;
}

const tot = f2(3, 4)

module.exports = {
    moltiplicazione,
    sum
};


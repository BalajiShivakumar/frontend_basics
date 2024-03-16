var x = function add(a,b){
  return a+b;
}

const y = (a,b) => a+b;

//or 

const z = (a,b) => {
  return a+b;
}

console.log(x(1,3));
console.log(y(3,5));
console.log(z(34,56));

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}


 console.log(x = sum(4, 9, 16, 25, 29, 100, 66, 77));



function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log( x = findMax(1, 123, 500, 115, 44, 88));



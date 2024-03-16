let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
  return counter;
}

// Call add() 3 times
console.log(add());
console.log(add());
console.log(add());

//Nested Functions
function addd(){
  let counter = 0;
  function increse(){
    counter += 2;
  }
  return counter;
}

console.log(addd());
console.log(addd());

function addd2(){
  let counter = 0;
  counter += 2;
  function returning(){
    return counter;
  }
  return counter;
}

console.log(addd2());
console.log(addd2());
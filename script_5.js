const person = {
  firstName : "Balaji",
  lastName : "Sivakumar",
  fullName : function () {
    return this.firstName + " " + this.lastName;
  }
}

console.log(person.fullName());

const person1 = {
  firstName : "Aswin",
  lastName : "Kumar",
}

const person2 = {
  firstName : "Manohar",
  lastName : "Yadav",
}

const personName = {
  fullName: function(){
    return this.firstName + " " + this.lastName;
  } 
}

console.log(personName.fullName.call(person1));
console.log(personName.fullName.call(person2));


//call can have arguments
/* 
console.log(person.fullName.call(person1, "Praveen", "Rajan")); */

// the fullName method of personName is applied on person2
console.log(personName.fullName.apply(person2));


//bind-function
let fullName = person.fullName.bind(person1);



setTimeout(person.display, 3000);
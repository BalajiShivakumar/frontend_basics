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
  lastName : "Kumar"
}

const person2 = {
  firstName : "Manohar",
  lastName : "Yadav"
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
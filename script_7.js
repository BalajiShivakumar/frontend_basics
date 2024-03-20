//JS Objects

const person = {
  firstName : "Balaji",
  lastName : "Sivakumar",
  DateOfBirth : "20/08/1999",
  age : "24",
  eyeColour : "brown"
}

console.log(person.firstName + " is " + person.age + " years old");

console.log(person.lastName + " is " + person.firstName + "'s father" );

const person2 = {};
  person2.firstName = "Aswin",
  person2.lastName = "Venkatesh",
  person2.DateOfBirth =  "11/12/1999",
  person2.age =  "24",
  person2.eyeColour = "black"

  console.log(person2.lastName + " is " + person2.firstName + "'s father" );

  console.log(person2.firstName + " is " + person2.age + " years old");


  const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }


console.log(myObj.cars);

const person3 = {
  firstName: "Manohar",
  lastName: "Yadav",
  id: 5566,
};
person3.name = function() {
  return this.firstName + " " + this.lastName;
};

console.log(person3);
console.log("His fullname is " + person3.name());




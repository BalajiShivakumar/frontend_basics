const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  // get lang() {
  //   return this.language;
  // }
};
//console.log(person.lang);

const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang1(lang) {
    this.language = lang;
  }
};

person1.lang = "en";

console.log(person1.lang);

const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "english",
  get lang() {
    return this.language.toUpperCase();
  }
};

console.log(person2.lang);

// Var a = “10AB20”;
// Var b = 20;
// Document.write(parseInt(a) + b );


const person3 = {
  firstName : "Sachin",
  lastName : "Tendulkar",
  language : "",
  set lang5(lang){
    this.language = lang;
  }
};
person3.lang = "Greek";
console.log(person3.lang);


const person4 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang6(lang) {
    this.language = lang;
  }
};
person4.lang = "Spanish";
console.log(person4.lang);
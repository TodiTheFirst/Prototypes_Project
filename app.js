// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }

// class Person extends AgedPerson {
//     name = 'Bibi';
//     constructor(){
//         super();
//         this.age = 30;
//     }
//     greet = function() {
//         console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
//     };
// }

// class Person {

//   name = "Oleg";

//   constructor() {
//     this.age = 20;
//   }

//   greet() {
//     console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
//   }
// }
// по сути является тем же самым что и функция которая представлена ниже
// function Person() {
//     this.age = 30;
//     this.name = 'Todi';
//     this.greet = function() {
//         console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
//     };
// }

// console.dir(Person);

// const p = new Person();
// p.greet();
// console.log(p.toString());
//сonsole.log(p.__proto__)
//прототип то что скрывается за обьетами почти всё имеет прототипы

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// };

// PaymentResponse.prototype.printAge = function(){
//     console.log(this.age);
// };

// console.dir(Object);

// const p = new Person ();
// p.greet();
// // p.printAge();
// console.log(p._proto_);
// const p2 = new p.__proto__.constructor();
// console.log(p2);

const course = {
  //  новый обьект по сути
  title: "Vlad Yspeh complite guide",
  rating: 5,
};

// console.log(course.__proto__);  // современное использование

// course.printRating();

// console.log(Object.getPrototypeOf(course)); //старое использование лучше использовать в проектах

Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course), // старое использование
  printRating: function () {           // метод для данного обьекта
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  }, 
});//создает обьект

student.name = 'Bis';
Object.defineProperties(student, 'progress', {
    configurable: true,
    emunerable: true,
    value: 0.8 ,
    writable: false,
});

course.printRating();
console.log(student);

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
function Person() {
    this.age = 30;
    this.name = 'Todi';
    this.greet = function() {
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
    };
}







const p = new Person();
p.greet();
console.log(p.toString());
//сonsole.log(p.__proto__) 
//прототип то что скрывается за обьетами почти всё имеет прототипы



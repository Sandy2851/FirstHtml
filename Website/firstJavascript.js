// console.log("Hi")

// var students = ["piko","doko","moko"];
// var paglu =[]

// console.log(students)
// paglu.push(students[1])
// console.log(paglu)

// var index = paglu.indexOf("doko")

// if (index > -1) {
//     paglu.splice(index, 1)
// }

// console.log(paglu)

// paglu.push(students[0])
// paglu.push(students[1])
// paglu.pop()
// paglu.pop()

// console.log(paglu)
// console.log(students)

// var students = ["John","Jacob","Caleb","Arun","Simmy"]
// //console.log(students)

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// var bankBalance = 500;

// function makeTransaction(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successful");
//     } else {
//         console.log("Insufficient Balance");
//     }
// }

// console.log(bankBalance);
// makeTransaction(79.00);
// console.log(bankBalance);
// makeTransaction(2.55);
// console.log(bankBalance);
// makeTransaction(425.00);

// var transaction = function(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successful");
//     } else {
//         console.log("Insufficient Balance");
//     }
// };

// transaction(10.00);
// console.log(bankBalance);

// var printCustomerName = function(first, last) {
//     console.log("First name: " + first + " Last name: " + last);
// }

// var applyForCreditCard = function(creditScore, soul) {
//     // call some functions to process application.
// }

// var bankOperations = [];
// bankOperations.push(transaction);
// bankOperations.push(printCustomerName);
// bankOperations.push(applyForCreditCard);





// var student0 = {
//     firstName: "mark",
//     lastName: "price",
//     age: 7,
//     greeting: function() {
//         return "Hi, I am " + this.firstName + ". I am " + this.age + " years old."
//     }
// }

// console.log(student0.greeting());

// var student1 = new Object();
// student1.firstName = "linda";
// student1.lastName = "parker";
// student1.age = 8;

// var student2 = {};
// student2.firstName = "mello";
// student2.lastName = "ginger";
// student2.age = 9;

// var students = [];

// function Student(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.greeting = function() {
//         return "Hi, I am " + this.firstName + " and I am " + this.age + " years old."
//     }
// }

// students.push(new Student("Jenny","Lage",7));
// students.push(new Student("Mark","Ruffalo",25));
// students.push(new Student("Pika","Chu",8));

// var student = students[0];


// // for in loop
// for (var key in student) {
//     console.log(student[key]);
// }

// for (var index = 0; index < students.length; index++) {
//      var student = students[index];
//     console.log(student.greeting());
// }

// var s1 = new Student("Jenny", "Parker", 6);
// console.log(s1);
// console.log(s1.greeting());

// students.push(student0);
// students.push(student1);
// students.push(student2);


// for (var index = 0; index < students.length; index++) {
//     console.log(students[index]);
// }


// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student["firstName"]);
// console.log(student["lastName"]);

//Aels's

this.car = "Honda civic with ugly spoiler";

var markGarage = {
    car: "Aston martin",
    getCar: function() {
        return this.car;
    }
}

console.log(markGarage.getCar());

var storeGetCarForLater = markGarage.getCar;
console.log(storeGetCarForLater());

var theRealGetCarFunction = markGarage.getCar.bind(markGarage);
console.log(theRealGetCarFunction());

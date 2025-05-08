// 1. Initialize an Array of Numbers:
let numbers = [1, 2, 3, 4, 5];

// 2. Use the forEach Method to Print Each Number:
console.log("Each number:");
numbers.forEach(function(number) {
  console.log(number);
});

// 3. Use the forEach Method to Calculate the Sum of the Numbers:
let sum = 0;
numbers.forEach(function(number) {
  sum += number;
});
console.log("Sum of numbers:", sum);

// 4. Use the forEach Method to Create a New Array with Squared Values:
let squaredNumbers = [];
numbers.forEach(function(number) {
  squaredNumbers.push(number * number);
});
console.log("Squared numbers:", squaredNumbers);







// 1. Initialize an Array of Numbers:
let numbers = [1, 2, 3, 4, 5];

// 2. Use the map Method to Create a New Array with Doubled Values:
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log("Doubled numbers:", doubledNumbers);
// Результат: [2, 4, 6, 8, 10]

// 3. Use the map Method to Create a New Array of Strings:
let stringNumbers = numbers.map(function(number) {
  return "Number: " + number;
});
console.log("String numbers:", stringNumbers);
// Результат: ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]

// 4. Use the map Method to Create a New Array of Objects:
let numberObjects = numbers.map(function(number) {
  return {
    original: number,
    squared: number * number
  };
});
console.log("Number objects:", numberObjects);
// Результат: массив объектов с original и squared








// 1. Initialize an Array of Numbers:
let numbers = [10, 20, 30, 40, 50];

// 2. Use the find Method to Locate a Number Greater Than 25:
let firstGreaterThan25 = numbers.find(function(number) {
  return number > 25;
});
console.log("First number greater than 25:", firstGreaterThan25);
// Результат: 30

// 3. Initialize an Array of Objects:
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 }
];

// 4. Use the find Method to Locate a Person Named "Charlie":
let personNamedCharlie = people.find(function(person) {
  return person.name === "Charlie";
});
console.log("Found person:", personNamedCharlie);
// Результат: { name: "Charlie", age: 35 }





// 1. Initialize an Array of Numbers:
let numbers = [5, 10, 15, 20, 25, 30];

// 2. Use the filter Method to Create a New Array with Numbers Greater Than 15:
let numbersGreaterThan15 = numbers.filter(function(number) {
  return number > 15;
});
console.log("Numbers greater than 15:", numbersGreaterThan15);
// Результат: [20, 25, 30]

// 3. Initialize an Array of Objects:
let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 95 }
];

// 4. Use the filter Method to Create a New Array with Students Who Scored Above 80:
let studentsAbove80 = students.filter(function(student) {
  return student.grade > 80;
});
console.log("Students who scored above 80:", studentsAbove80);
/*
Результат:
[
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 95 }
]
*/




// 1. Initialize an Array of Numbers:
let numbers = [4, 8, 15, 16, 23, 42];

// 2. Use the some Method to Check for Numbers Greater Than 20:
let hasNumberGreaterThan20 = numbers.some(function(number) {
  return number > 20;
});
console.log("Any number greater than 20:", hasNumberGreaterThan20);  // true

// 3. Use the every Method to Check for Numbers Less Than 50:
let allNumbersLessThan50 = numbers.every(function(number) {
  return number < 50;
});
console.log("All numbers less than 50:", allNumbersLessThan50);  // true

// 4. Initialize an Array of Objects:
let students = [
  { name: "Alice", age: 25, passed: true },
  { name: "Bob", age: 22, passed: false },
  { name: "Charlie", age: 27, passed: true },
  { name: "David", age: 20, passed: true }
];

// 5. Use the some Method to Check if Any Student Failed:
let hasFailedStudent = students.some(function(student) {
  return student.passed === false;
});
console.log("Any student failed:", hasFailedStudent);  // true

// 6. Use the every Method to Check if All Students are Older Than 18:
let allOlderThan18 = students.every(function(student) {
  return student.age > 18;
});
console.log("All students older than 18:", allOlderThan18);  // true

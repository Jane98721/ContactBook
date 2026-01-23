let firstName = 'Jane';
let favoriteNumber = 82;
let likesCoding = true;
let birthYear = 1996;
let currentYear = 2026;

console.log(`Hi, my name is ${firstName}, my favorite number is ${favoriteNumber},
and it is ${likesCoding} that I like coding`)

let myAge = currentYear - birthYear;
console.log(myAge)

console.log(`Hi my name is ${firstName} and I am ${myAge} years old`)

const favoriteFood = ['pizza', 'hamburger', 'pasta bolognese']

const student = {
  firstName: firstName,
  favoriteNumber: favoriteNumber,
  likesCoding: likesCoding,
  favoriteFood: favoriteFood
}

console.log(student)
console.log(student.favoriteFood)


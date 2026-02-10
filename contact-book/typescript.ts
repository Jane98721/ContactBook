///// Union Types

type IDType = number | string

const showID = (id: IDType) => {
  console.log(`My id is ${id}`)
}

showID(5)
showID('5')



type Fruit = 'apple' | 'banana' | 'orange'

const eatFruit = (fruit: Fruit) => {

  console.log(`You ate an ${fruit}`)

}

eatFruit('apple')
eatFruit('orange')




type Result = true | false

const printResult = (result : Result) => {

  if(result === true){
    console.log('Pass')
  } else {
    console.log('Fail')
  }
}

printResult(true)
printResult(false)


////// Interfaces and Type Aliases

interface Book {
  title: string;
  pages: number;
}

type BookInfo = Book;

const describeBook = (bookInfo: BookInfo) => {

  console.log(`The book ${bookInfo.title} has ${bookInfo.pages} pages`)

}

describeBook({title: 'How to cook', pages: 120})



interface Teacher {
  name: string,
  subject: string
}

interface Employee {
  id: number,
  email: string
}

type SchoolTeacher = Teacher & Employee

const printTeacherInfo = (schoolTeacher: SchoolTeacher) => {
  console.log(`Name: ${schoolTeacher.name} email: ${schoolTeacher.email}`)
}

printTeacherInfo({
  name: 'Margret',
  subject: 'Math',
  id: 4,
  email: "Margret@gmail.com"
})




interface Car {
  brand: string,
  year: number
}

type CarDetails = Car

const printCar = (car: CarDetails) => {

  console.log(`Brand: ${car.brand}, year: ${car.year} `)

}

printCar({brand: "Volkswagen", year: 2020})



///// Enums

enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue"
}

const showColor = () => {

  console.log(`You choose ${Color.Blue} / ${Color.Green} / ${Color.Red}`)

}

showColor()





enum PizzaSize {

  Small = "small",
  Medium = "medium",
  Large = "large"

}

const orderPizza = () => {

  console.log(`You ordered a ${PizzaSize.Large} pizza`)

}

orderPizza()




enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest"
}

const printRole = (role: Role) => {
  if(role === Role.Admin){
    console.log(`You have full access`)
  } else if (role === Role.User){
    console.log('You have limited access')
  } else if(role === Role.Guest){
    console.log('You have guest access')
  }
}

printRole(Role.Admin)
printRole(Role.User)
printRole(Role.Guest)

/////// Generics

const wrapInArray = <T>(input: T): T[] => {
  return[input]

}

console.log(wrapInArray('dog'))




const firstItem = <T> (array: T[]): T | undefined => {

  return array.at(0)

}

console.log(firstItem([1,2,3]))
console.log(firstItem(["a","b", "c"]))





const swap = <T> (item1: T, item2: T): T[] => {

  return[item1, item2].reverse()

}

console.log(swap('Hello', "world"))
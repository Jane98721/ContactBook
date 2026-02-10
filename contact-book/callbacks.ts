type displayCallbackFunction = (message: string) => void;

const sayHello = (displayCallback: displayCallbackFunction) => {
  const message = 'Hello fram callback';
  displayCallback(message)
}

const displayCallback = (message: string) => {
  console.log(message)
}

sayHello(displayCallback)


//////////////////////////////
type displayHelloFunction = (message: string) => void;

const sayHelloLater = (displayHello: displayHelloFunction) => {

  console.log('Hello')

  setTimeout(() => {

    const message = 'Hi, I am late'
    displayHello(message)

  }, 2000)

}

const displayHello = (message: string) => {

  console.log(message)

}

sayHelloLater(displayHello)

//////////////////////////////////////

type displayCalculateFunction = (result: number) => void

const calculate = (a:number, b:number, displayCalculate:displayCalculateFunction) => {

  const result = a + b
  displayCalculate(result)

}

const displayCalculate = (result: number) => {

  console.log(result)

}

calculate(4, 5, displayCalculate)

////////////////////////////////////

type displayUpperCaseStringFunction = (message: string) => void

const upperCaseString = (displayUpperCaseString : displayUpperCaseStringFunction) => {

  const message = 'Hello'
  displayUpperCaseString(message)

}

const displayUpperCaseString = (message: string) => {
  
  console.log(message.toUpperCase())

}

upperCaseString(displayUpperCaseString)

/////////////////////////////////////////
type displayPizzaReady = (message: string) => void

const orderPizza = (pizzaReady: displayPizzaReady) => {

  console.log('Ordered a pizza')

  setTimeout(() => {
    const message = 'Your pizza is ready'
    pizzaReady(message)
  }, 3000)

}

const pizzaReady = (message: string) => {

  console.log(message)

}

orderPizza(pizzaReady)

//////////////////////////////////////////////////////

type displayMessagesFunction = (message: string) => void

const multipleMessages = (m: string, displayMessages: displayMessagesFunction) => {

  const message = m
  displayMessages(message)

}

const displayMessages = (message: string) => {

  console.log(message)

}

multipleMessages('Hello', displayMessages)
multipleMessages('How are u doing', displayMessages)
multipleMessages('I am fine', displayMessages)



/////////////////////////////////////////////////////

type displayDownloadedFileFunction = (fullURL: string) => void

const downLoadFile = (URL:string, displayDownloadedFile: displayDownloadedFileFunction) => {

  setTimeout(() => {

    const fullURL = `Downloaded data from https://${URL}`

    displayDownloadedFile(fullURL)

  }, 2000)

}

const displayDownloadedFile = (fullURL: string) => {

  console.log(fullURL)

}

downLoadFile('google.se', displayDownloadedFile)

////////////////////////////////////////////////

const displayInfo = (success:any, error:any) => {

  const successMessage = 'Success'
  const errorMessage = 'Error'

  if(Math.random () < 0.5){
    success(successMessage)
  } else {
    error(errorMessage)
  }
}

const success = (successMessage:string) => {
  console.log(successMessage)
}

const error = (errorMessage:string) => {
  console.log(errorMessage)
}

displayInfo(success, error)

///////////////////////////////////////////////////////////

const operations = (a: number, b: number, callback: any) => {
  const add = a + b
  const subtraction = a - b
  const multiplication = a * b
  const division = a / b
  displayOperations(add, subtraction, multiplication, division)
}

const displayOperations = 
(add: number, subtraction:number, multiplication:number, division: number) => {
  console.log(add)
  console.log(subtraction)
  console.log(multiplication)
  console.log(division)
}

operations(4, 2, displayOperations)

//////////////////////////////////////////////////////////

const displaySteps = (stepOne: any, stepTwo: any, stepThree: any) => {

  const step = 'Step'

  setTimeout(() => {

    stepOne(step)
    
  },1000)

  setTimeout(() => {

  stepTwo(step)
  },1000)

    setTimeout(() => {

    stepThree(step)

  },1000)
}

const stepOne = (step: string) =>{

  console.log(`${step} 1 done`)

}

const stepTwo = (step:string) =>{

  console.log(`${step} 2 done`)
  
}

const stepThree = (step:string) =>{

console.log(`${step} 3 done`)
  
}

displaySteps(stepOne, stepTwo, stepThree)


const orderPizza = () => {
  return new Promise ((resolve, reject) => {
    let ordered = true

    if(ordered){
      resolve ('You made an order')
    } else {
      reject ('Something went wrong with your order')
    }
  })
}

async function pizzaOrder (){
  try{
     const data = await orderPizza()
     console.log(data)
  } catch(error){
    console.log(error)
  }
}

pizzaOrder()

///////////////////////

const fetchApi = async (id) => {

  try {
    const api = await fetch(`https://api.adviceslip.com/advice/${id}`)
    const data = await api.json()
    console.log(data)
  } 
  
  catch(error){
    console.log('Error fetching the data', error)
  }
}

fetchApi(2) 

///////////////////////

const fetchApiMix = async (id) => {

  try {

    const data =  await fetch(`https://api.adviceslip.com/advice/${id}`)

    if(!response.ok){
      throw new Error('Something went wrong')
    }

    const api = await data.json()
    console.log(api)

    const pizzaOrder = await pizzaOrder()
    console.log(pizzaOrder)

  } catch (error){

    console.log('Error')
  }
}

fetchApiMix(2)
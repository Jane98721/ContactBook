interface Contact {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  tags?: string[];
}

let contacts: Contact[] = []

function addContact(contact: Contact){
  contacts.push(contact)
}

addContact({
  id: 1,
  name: 'Jane',
  phone: '0728291029',
  email: "Jane@hotmail.com"
}),
addContact ({
    id:2, 
    name: 'My',
    phone: "0739210099",
    email: "My@hotmail.com"

}),
addContact ({
    id:3, 
    name: 'Klara',
    phone: "0729231192",
    email: "Klara@hotmail.com"
})

console.log('New contact added')

function listContacts(){
  for(let c of contacts){
    console.log(c)
  }
}

listContacts()


function findByName(name:string): Contact | undefined {

  return contacts.find(c => c.name === name)
}

let name = findByName('Jane')
console.log(name)


function removeById(id: number) : boolean {

  let index = contacts.findIndex(c => c.id === id)

  if(index === -1){
    return false
  }
  contacts.splice(index, 1)
  return true
}

let removed = removeById(2) ? 'Contact removed' : 'Somethig went wrong'

console.log(removed)

contacts.forEach(c => console.log(c))



interface Person{
  firstName: string,
  lastName: string
}

class User {
  fullName: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + '' + lastName
  }
}

function greeter(person:Person){
  return "hello" + person.firstName + '' + person.lastName
}

// let user:Person = {
//   firstName: '刘',
//   lastName: '信恒'
// }



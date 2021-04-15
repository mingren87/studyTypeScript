// 类
class Greeter {
  greeting:string 
  constructor(message:string) {
    this.greeting = message
  }
  greet () {
    return 'hello ' + this.greeting
  }
}

let newGreet = new Greeter('LiuXinHeng')
console.log(newGreet.greet())
class UserInfo {
  userName:string
  userAge:number
  userPhone:number
  constructor(userName:string, userAge:number, userPhone:number) {
    this.userName = userName
    this.userAge = userAge
    this.userPhone = userPhone
  }
  getUserInfo () {
    return {
      name:this.userName, 
      age:this.userAge, 
      phone:this.userPhone
    }
  }
}

let userInfo = new UserInfo('LiuXinHeng', 30, 15010005655)
console.log(userInfo.getUserInfo())


// 类的继承

class Animal {//超类
age:number
  name:string
  constructor(age:number, name:string) {
    this.age = age
    this.name = name
  }
  move(distance:number = 0) {
    console.log(`Animal moved $ {distance}m`)
  }
  getInfo() {
    console.log(this.name, this.age)
    return this.name + this.age
  }
}

class Dog extends Animal {// 子类
constructor(age:number, name:string) {
    super(age, name)// 通过super关键词，继承父类的构造函数
}
  move(distance:number = 1000) {
    console.log(`dog move $ {distance}m`)
    super.move(distance)// 使用super关键词，调用父类的方法
}
  bark() {
    console.log('woof! woof !')
  }
}

class Horse extends Animal {
  constructor(age:number, name:string) {
    super(age, name)
  }
  move(distance:number = 20000) {
    console.log('Gallaping.....')
    super.move(distance + 5000)
  }

  getAnimalInfo() {
    super.getInfo()
  }
}

let dog = new Dog(5, '小熊')
console.log(dog.getInfo())
console.log(dog.bark())
console.log(dog.move())

let horse = new Horse(12, '小马')
console.log(horse.move())
console.log(horse.getAnimalInfo())


// 公共、私有与受保护修饰符
class Person {
  public name:string // 公共属性 
  private age:number // 私有属性
  public constructor(name:string, age:number) {
    this.name = name
    this.age = age
  }

  public getUserInfo() {
    return this.name + this.age
  }
}

// new Person('Li', 25).age // 私有属性，无法访问

class Child extends Person {
  constructor() {
    super('Liu', 0)
  }
}

class Wife {
  private name:string
  constructor(name:string) {
    this.name = name
   }
}


// 保护修饰符
class Job {
  protected jobName:string
  constructor(name:string) {
    this.jobName = name
  }
}

class Sales extends Job {
  private saleAge:number
  constructor(name:string, age:number) {
    super(name)
    this.saleAge = age
  }
  getSaleName() {
    return `my name is $ {this.jobName}, age $ {this.saleAge}`
  }
}

let sales = new Sales('xinHeng', 30)
console.log(sales.getSaleName())
// console.log(sales.jobName) // 该属性受到保护

// readonly修饰符

class Programmer {
  readonly name:string
    constructor(name:string) {
      this.name = name
    }
}

let programer = new Programmer('xinheng')
// programer.name = 'liuyong' // 只读






















































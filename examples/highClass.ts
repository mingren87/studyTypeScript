// 抽象类 -- 高级技巧

abstract class Person {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earth .....')
  }
}

// 实现抽象类
abstract class Department {
  name: string
  constructor(name:string) {
    this.name = name
  }
  printName():void {
    console.log('Department name ' + this.name)
  }
  abstract printMeeting():void
}

class AccountingDepartment extends Department{
  constructor() {
    super('Accounting ad Auditing')    
  }
  printMeeting():void {
    console.log('The Accounting Department meets each Monday at 10a  m')
  }
  genterateReports():void {
    console.log('Generating accounting reports ....')
  }
}

let department : Department
// department = new Department() // 不能直接实例化这个抽象类
department = new AccountingDepartment() // 只能实例化派生类

console.log(department.printName())
console.log(department.printMeeting())
// department.genterateReports // 在Department类中并没有定义,因此才会报错


// 类的一些高级技巧

class Greeter {
  static standardGreeting = 'Hello, there' // 静态属性
  greeting: string
  constructor(message?:string) { // 添加修饰符，将message变为可选参数
    this.greeting = message
  }
  greet(){
    if (this.greeting) {
      return 'Hello，' + this.greeting   
    }else {
      return Greeter.standardGreeting
    }
  }
}

let greeter: Greeter
greeter = new Greeter()
console.log(greeter.greet())

// 重新创建一个Greeter的构造器
let greeterMaker: typeof Greeter = Greeter  // 获取Greeter类的类型，而不是实例的类型，获取到的是静态的类型
greeterMaker.standardGreeting = 'Hey there'

let greeter2:Greeter = new greeterMaker()
console.log(greeter2.greet())















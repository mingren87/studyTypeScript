// DEMO--01
// function f(input:boolean) {
//   let a = 10
//   if (input) {
//     let b = a + 1
//     return b
//   }
// }
// console.log(f(true))

//DEMO--02
// try {
//   throw 'no'
// } catch (error) {
//   console.log(error)
// }

// 暂时性死区
// a++
// let a = 1

// function foo() {
//   return a
// }
// foo()
// let a

// function f(condition:boolean, x:number) {
//   if (condition) {
//     let x = 100
//     return x
//   }
//   return x
// }

// console.log(f(false, 0))
// console.log(f(true, 10))

// DEMO--03
// function sumMatrix(matrix:number[][]) {
//   let sum = 0
//   for (let index = 0; index < matrix.length; index++) {
//     const element = matrix[index]; 
//     for (let index2 = 0; index2 < element.length; index2++) {
//       sum += element[index2]; 
//     }
//   }
//   return sum
// }

// let matrix = [
//   [1,2,3],
//   [4,5,6]
// ]
// console.log(sumMatrix(matrix))


// DEMO--04
// for (let index = 0; index < 10; index++) {
  // setTimeout(() => {
    // console.log(index)
  // }, 1000 * index);
// }


// DEMO--05

// let inputArr:[number, number] = [1, 2]

// function foo([first, sec]:[number, number]) {
//   console.log(first)
//   console.log(sec)
// }

// foo(inputArr)


// let inputArr:number[] = [1,2, 3] 
// let inputArr:any[] = [1,2, '', {}]
// let inputArr:[number, string] = [1, '']

// let userName:string = 'liuxinheng'
// let userNameNuber:number = (userName as String).length
// console.log(userNameNuber)

// let[, sec, , forth] = [1,2,3,4]
// console.log(sec)
// console.log(forth)

// let [first, ...rest] = [1,2,3,4]
// console.log(first)
// console.log(rest)

// let userInfo =  {
//   age:30, 
//   userName:'liuxinheng', 
//   address:'国贸'
// }
// let {age, userName}: {age:number, userName:string}= userInfo

// let firstArr = [0, 1, 2]
// let secArr = [3, 4, 5]
// let bothArr = [...firstArr, ...secArr, 6]
// console.log(bothArr)

// let obj =  {
//   age:30, 
//   userName:'liuxinheng'
// }

// let searchObj =  {...obj, age: 20}
// console.log(searchObj)


// typeScript 接口

// interface GetUserName {
//   userName: string
// }

// function getUserName(userInfo: GetUserName) {
//   console.log(userInfo.userName)
// }

// let myUserInfo = {
//   age: 30,
//   userName: 'LiuXinHeng'
// }

// getUserName(myUserInfo)


// DEMO--可选属性（接口）
// interface Square {
//   color:string, 
//   area:number
// }

// interface SquareConfig {
//   color?:string // 加?表示可选属性 
// width?:number
// [propName:string]:any // 额外属性的检查：额外的属性，类型是无所谓的(往往是bug的来源)
// }

// function createSquare(config:SquareConfig):Square {
//   let newSquare =  {color:"white", area:100}
//   if (config.color) {
//     newSquare.color = config.color
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }

// let mySquare = createSquare( {color:'black'})
// console.log(mySquare)

// DEMO--只读属性（接口） --- 只有在创建的时候，才能修改值

// interface Point{
//   readonly x: number
//   readonly y: number
// }

// let p1:Point = {x: 10 , y: 20}
// p1.x = 3 // 报错，不能对其进行修改

// DEMO--泛型只读数组
// let a: number[] = [1,2,3,4]
// let ro: ReadonlyArray<number> = a
// ro[1] = 5 // 不能修改，如果修改会报错
// ro.push()
// ro.length
// 不能在操作改数组

// 利用断言可以修改只读数组
// a = ro as number[]
// console.log(a)

// const 和 只读属性的区别：
// 当做变量还是当做属性看待，当做变量就用const，反之就用只读属性


// DEMO--函数类型（接口）
// interface SearchFunc {
//   (source: string, subString: string): boolean
// }

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string): boolean { // 不用保证名字是一致的，甚至不用写明source和subString的类型和返回值的类型
//   let result = source.search(subString) 
//   return result > -1
// }

// DEMO--索引签名的接口类型(数字签名和字符串签名) 数字索引的返回值，必须是字符串索引返回值的子类型 

//  interface StringArray  {
//    [index: number]: string
//  }

//  let myArray:StringArray;

//  myArray = ['Bob', 'Fred']
//  let myStr:string = myArray[0]

// 索引签名可以设置只读的
// interface ReadonlyStringArray {
//   readonly [index:number] : string
// }

// let myArray: ReadonlyStringArray = ['刘', '信', '恒' ]
// myArray[4] = '李'


// 类 类型
// interface ClockInterface {
//   // 实例接口
//   currentTime: Date
//   setTime(d: Date)
// }

// //构造器签名
// interface ClockContructor{
//   new(hour: number, minute: number )
// }

// class Clock implements ClockInterface {
//   currentTime: Date
//   constructor(H: number, m:number) {

//   }
//   setTime(d: Date) {
//     this.currentTime = d
//   }
// }

// -----------------------------------------------------------------------

// 实例类型接口
interface ClockInterface {
  tick()
}

//构造器类型接口
interface ClockContructor {
  new(hour:number, minute:number ):ClockInterface // 返回一个实例的接口 
}

function createClock(ctor:ClockContructor, hour:number, minute:number):ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h:number, m:number) {
  
  }
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h:number, m:number) {
  }
  tick() {
    console.log('tick toc')
  }
}
 
let digital = createClock(DigitalClock, 12, 15)
let analog = createClock(AnalogClock, 7, 32)

digital.tick()






















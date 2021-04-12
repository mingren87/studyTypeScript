// 继承接口，类也可以相互继承

interface Shape {
  color: string
}

interface UserAge {
  age: number
}

interface UserName extends Shape, UserAge{
  name:string
}

let myInfo = {} as UserName
myInfo.color = 'blue'
myInfo.name = 'LiuXinHeng'
myInfo.age = 29

console.log(myInfo)
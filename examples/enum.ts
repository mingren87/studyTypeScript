// 枚举
// 使用枚举我们可以定义一些带名字的常量，使用枚举可以清晰地表达意图或创建一组有区别的用例。


// 数字枚举

enum userAge {
  person01 = 10,
  person02,
  person03
}

console.log(userAge.person03, 'person01')

enum childAge {
  child01,
  child02,
  child03
}
console.log(childAge.child01, 'child01')

//  当我们不在乎成员的值的时候，这种自增长的行为是很有用处的

// 通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：

enum isFlag {
  No = 0,
  Yes = 1
}

function respond(recipient: string, message: isFlag): string {
  return recipient + message
}

let result = respond("Princess Caroline", isFlag.Yes)
console.log(result, 'result')


// 字符串枚举
// 字符串枚举的概念很简单，但是有细微的 运行时的差别。 
// 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// 计算的和常量成员

enum E {
  X
}

console.log(E.X) // 它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0

// 反向映射
// 创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字

enum Enum {
  A
}

let a = Enum.A
let nameOfA = Enum[a]
console.log(nameOfA)
console.log(typeof nameOfA)



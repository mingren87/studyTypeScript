// 高级类型

// 交叉类型--交叉类型是将多个类型合并为一个类型

function extend < T, U > (first:T, second:U):T & U { // T & U 我们称之为交叉类型
  let result =  < T & U >  {}; 
  for (let id in first) {
      ( < any > result)[id] = ( < any > first)[id]; 
  }
  for (let id in second) {
      if ( ! result.hasOwnProperty(id)) {
          ( < any > result)[id] = ( < any > second)[id]; 
      }
  }
  return result; 
}

class Person {
  constructor(public name:string) {}
}
interface Loggable {
  log():void; 
}
class ConsoleLogger implements Loggable {
  log() {
      // ...
  }
}
var jim = extend(new Person("Jim"), new ConsoleLogger()); 
var n = jim.name; 
jim.log(); 


// 联合类型

function padLeft(value:string, padding:any) {
  //padLeft存在一个问题， padding参数的类型指定成了 any。 这就是说我们可以传入一个既不是 number也不是 string类型的参数，但是TypeScript却不报错。
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value; 
  }
  if (typeof padding === "string") {
      return padding + value; 
  }
  throw new Error(`Expected string or number, got '${padding}'.`); 
}

let indentedString = padLeft("Hello world", true); // 编译阶段通过，运行时报错

// 在传统的面向对象语言里，我们可能会将这两种类型抽象成有层级的类型。 这么做显然是非常清晰的，但同时也存在了过度设计。
// padLeft原始版本的好处之一是允许我们传入原始类型。 这样做的话使用起来既简单又方便。 如果我们就是想使用已经存在的函数的话，这种新的方式就不适用了。

// 代替 any， 我们可以使用 联合类型做为 padding的参数：
function padRight(value:string, padding:any) {
  // 联合类型表示一个值可以是几种类型之一。 
  // 我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean。
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value; 
  }
  if (typeof padding === "string") {
      return padding + value; 
  }
  throw new Error(`Expected string or number, got '${padding}'.`); 
}


// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
interface Bird {
  fly(); 
  layEggs(); 
}

interface Fish {
  swim(); 
  layEggs(); 
}

function getSmallPet():Fish | Bird {
  // ...
  return
}

// let pet = getSmallPet(); 
// 可以调用共有成员 
// pet.layEggs(); // okay
// pet.swim(); // errors


// 类型保护与区分类型

// 联合类型适合于那些值可以为不同类型的情况。 但当我们想确切地了解是否为 Fish时怎么办？ 
// JavaScript里常用来区分2个可能值的方法是检查成员是否存在。 如之前提及的，我们只能访问联合类型中共同拥有的成员

let pet = getSmallPet();

// 每一个成员访问都会报错

// if (pet.swim) {
//     pet.swim();
// }
// else if (pet.fly) {
//     pet.fly();
// }

// 为了让这段代码工作，我们要使用类型断言：

// if ((<Fish>pet).swim) {
//     (<Fish>pet).swim();
// }
// else {
//     (<Bird>pet).fly();
// }

// 用户自定义的类型保护

// TypeScript里的 类型保护机制让它成为了现实。
// 类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。 要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 类型谓词：

// 谓词为 parameterName is Type这种形式， parameterName必须是来自于当前函数签名里的一个参数名。
function isFish(pet: Fish | Bird): pet is Fish { // pet is Fish就是类型谓词
  return (<Fish>pet).swim !== undefined;
}

// 'swim' 和 'fly' 调用都没有问题了

if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}

// 注意TypeScript不仅知道在 if分支里 pet是 Fish类型； 它还清楚在 else分支里，一定 不是 Fish类型，一定是 Bird类型。

// typeof类型保护

function paddingLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// 这些* typeof类型保护*只有两种形式能被识别： typeof v === "typename"和 typeof v !== "typename"， "typename"必须是 "number"， "string"， "boolean"或 "symbol" 
// 但是TypeScript并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
















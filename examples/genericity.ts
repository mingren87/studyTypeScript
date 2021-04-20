// 泛型

// function identity(arg: number): number {
  // return arg;
// }

// 使用泛型变量

// 类型变量，它是一种特殊的变量，只用于表示类型而不是值
// function identity<T>(arg: T): T {
//   return arg
// }

// 我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 
// 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。

// let output = identity<string>("myString");  // type of output will be 'string'

// 类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
let output = identity("myString"); // type of output will be 'string'
// 注意我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。 类型推论帮助我们保持代码精简和高可读性。


// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length);  // Error: T doesn't have .length
//   return arg;
// }

// 编译器会报错说我们使用了arg的.length属性，但是没有地方指明arg具有这个属性。 
// 记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的。


// loggingIdentity的类型：泛型函数loggingIdentity，接收类型参数T和参数arg，它是个元素类型是T的数组，并返回元素类型是T的数组。

// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length); 
//   return arg;
// }

// 另一种实现方式：
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//   console.log(arg.length);
//   return arg;
// }





// 泛型函数
// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity;


// 我们还可以使用带有调用签名的对象字面量来定义泛型函数：
// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: {<T>(arg: T): T} = identity;


// 我们把上面例子里的对象字面量拿出来做为一个接口：
// interface GenericIdentityFn {
//   <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentityFn = identity;

function identity<T>(arg: T): T {
  return arg;
}

interface GenericIdentityFn<T> {
  (arg: T): T;
}

// 当我们使用 GenericIdentityFn的时候，还得传入一个类型参数来指定泛型类型（这里是：number），锁定了之后代码里使用的类型。 
// 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。

let myIdentity: GenericIdentityFn<number> = identity; // 无法创建泛型枚举和泛型命名空间







// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 也可以使用字符串或其它更复杂的类型。

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
// 与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。
// 类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。





// 泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}

// 泛型函数被定义了约束
//  loggingIdentity(3)

loggingIdentity([]) // 参数要有length属性

// 在泛型约束中使用类型参数 （声明一个类型参数，且它被另一个类型参数所约束）
function getProperty(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.


// 在泛型里使用类类型
// 在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，

function create<T>(c: {new(): T; }): T {
  return new c();
}

// 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!







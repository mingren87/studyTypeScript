// 类型推断

// 最佳通用类型
let x = [1, 2,null]
// 为了推断x的类型，我们必须考虑所有元素的类型。 
// 这里有两种选择： number和null。

class Animal {
  numlegs: number
}

class Bee extends Animal {
}

class Lion extends Animal {
}

// 计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型。
let zoo = [new Bee(), new Lion()]



// 上下文类型
// TypeScript类型推论也可能按照相反的方向进行。 
// 这被叫做“按上下文归类”。按上下文归类会发生在表达式的类型与所处的位置相关时。


window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);  //<- Error
};
// 这个例子会得到一个类型错误，TypeScript类型检查器使用Window.onmousedown函数的类型来推断右边函数表达式的类型。 

// 因此，就能推断出 mouseEvent参数的类型了。 如果函数表达式不是在上下文类型的位置， mouseEvent参数的类型需要指定为any，这样也不会报错了
window.onmousedown = function(mouseEvent: any) {
  console.log(mouseEvent.button);  //<- Now, no error is given
};

// 通常包含函数的参数，赋值表达式的右边，类型断言，对象成员和数组字面量和返回值语句。 上下文类型也会做为最佳通用类型的候选类型。

function createZoo(): Animal[] {
  return [new Bee(), new Lion()];
}

//  
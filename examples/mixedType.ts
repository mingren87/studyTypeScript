// 混合类型
// 希望一个对象上有多种类型

interface Counter {
  (start: number): string, // 函数类型，并且返回是字符串类型
  interval: number // 作为函数的同时，我也希望它所谓对象，有个number属性
  reset():void
}

// getCounter函数 放回一个Counter 属性
function getCounter():Counter {
  let counter = (function (star: number){
    console.log(star, 'star')
  }) as Counter // 强制断言为Counter类型

  counter.interval = 12
  counter.reset = function () {
    
  }
  return counter
}

let action = getCounter()
action(10)
action.interval = 20
action.reset()


// 接口继承类-- 当一个接口继承一个类的类型的时候，它会继承这个类的成员，但是不包括实现

class Control {
  private state: any
}

interface SelectTableControl extends Control {
  select()  
}

class Button extends Control implements SelectTableControl{
  // select 方法的实现
  select(){

  }
}

class TextBox extends Control {
  // 定义一个方法 
  select(){

   }
}

class ImageC implements SelectTableControl{
  select() {
    
  }
}
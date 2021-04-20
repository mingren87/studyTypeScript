// 函数类型

let z = 10
// 给函数中的参数添加类型,并且给返回值添加类型
function add(x:number, y:number):number {
  return x + y
}

// let addNumber: (baseValue:number, increment:number)=>number = function (x:number, y:number):number {
//   return x + y + z  
// }


let addNumber = function (x:number, y:number):number {
  return x + y
}

console.log(addNumber(3, 2))

// 函数的可选参数和默认参数

// 使用 ? 将参数变为可选参数 
// 给参数提供默认值 
function buildName(firstName = 'Liu', lastName?:string):string {// 给lastName后加上？将参数变为可选参数
if (lastName) {
    return firstName + lastName
  }else {
    return 'only ' + firstName
  }
}

// 参数的个数必须是一致的
let person1 = buildName('Bob')
console.log(person1)
// let person2 = buildName('Bob', 'Adams', 'Sr')
let person3 = buildName('Bob', 'Sr')
console.log(person3)
let person4 = buildName(undefined, 'Bob')// LiuBob
let person5 = buildName(null, 'Bob')// nullBob
console.log(person4, person5)

 // 剩余参数
 function buildNumber(params1:number, params2:number, ...resetParams:number[]) {
  return params1 + params2
 }

 console.log(buildNumber(1, 2, 3, 4, 5, 6))
 console.log(buildNumber(1, 2))
 console.log(buildNumber(1, 25, 6))
 console.log(buildNumber(1, 2, 35, 6))

 let buildNameFn:(fnName:string, ...rest:string[]) => string = buildName
 
console.log(buildNameFn('Liu', 'Xin', 'Heng'))


// 关键词 this

interface Card {
  suit:string
  card:number
}

interface Deck {
  suits:string[]
  cards:number[]
  
  createCardPicker():() => Card
}


let deck:Deck =  {
  suits:['hearts', 'spades', 'clubs', 'diamonds'], 
  cards:Array(52), 
  createCardPicker:function (this:Deck) {
    return () =>  {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)
      return {
        suit:this.suits[pickedSuit], 
        card:pickedCard % 13
      }
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCart = cardPicker()
console.log('card: ' + pickedCart.card + ' of ' + pickedCart.suit)


interface UIElement {
  addClickListener(onclick:(this:void, e:Event) => void):void
}

class Handler {
  type:string
  // onClickBad(this: Handler, e:Event){
  //   this.type = e.type
  // } 
  
  // 可以将this改成void
  // onClickBad(this:void, e:Event){
  //   console.log('clicked')
  // }

  // 也可以将onClickBad改成箭头函数
  onClickBad = (e:Event) =>  {
    this.type = e.type
  }
}

let h = new Handler()

let uiElement:UIElement =  {
  addClickListener() {

  }
}

uiElement.addClickListener(h.onClickBad)// 因为Handler中的方法onClickBad的this是Handler类型，所以才会报错，如果将onClickBad的this变为void则不会报错











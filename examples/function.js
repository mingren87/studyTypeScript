// 函数类型
var z = 10;
// 给函数中的参数添加类型,并且给返回值添加类型
function add(x, y) {
    return x + y;
}
// let addNumber: (baseValue:number, increment:number)=>number = function (x:number, y:number):number {
//   return x + y + z  
// }
var addNumber = function (x, y) {
    return x + y;
};
console.log(addNumber(3, 2));
// 函数的可选参数和默认参数
// 使用 ? 将参数变为可选参数 
// 给参数提供默认值 
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Liu'; }
    if (lastName) {
        return firstName + lastName;
    }
    else {
        return 'only ' + firstName;
    }
}
// 参数的个数必须是一致的
var person1 = buildName('Bob');
console.log(person1);
// let person2 = buildName('Bob', 'Adams', 'Sr')
var person3 = buildName('Bob', 'Sr');
console.log(person3);
var person4 = buildName(undefined, 'Bob'); // LiuBob
var person5 = buildName(null, 'Bob'); // nullBob
console.log(person4, person5);
// 剩余参数
function buildNumber(params1, params2) {
    var resetParams = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        resetParams[_i - 2] = arguments[_i];
    }
    return params1 + params2;
}
console.log(buildNumber(1, 2, 3, 4, 5, 6));
console.log(buildNumber(1, 2));
console.log(buildNumber(1, 25, 6));
console.log(buildNumber(1, 2, 35, 6));
var buildNameFn = buildName;
console.log(buildNameFn('Liu', 'Xin', 'Heng'));
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCart = cardPicker();
console.log('card: ' + pickedCart.card + ' of ' + pickedCart.suit);

// 枚举
// 使用枚举我们可以定义一些带名字的常量，使用枚举可以清晰地表达意图或创建一组有区别的用例。
// 数字枚举
var userAge;
(function (userAge) {
    userAge[userAge["person01"] = 10] = "person01";
    userAge[userAge["person02"] = 11] = "person02";
    userAge[userAge["person03"] = 12] = "person03";
})(userAge || (userAge = {}));
console.log(userAge.person03, 'person01');
var childAge;
(function (childAge) {
    childAge[childAge["child01"] = 0] = "child01";
    childAge[childAge["child02"] = 1] = "child02";
    childAge[childAge["child03"] = 2] = "child03";
})(childAge || (childAge = {}));
console.log(childAge.child01, 'child01');
//  当我们不在乎成员的值的时候，这种自增长的行为是很有用处的
// 通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
var isFlag;
(function (isFlag) {
    isFlag[isFlag["No"] = 0] = "No";
    isFlag[isFlag["Yes"] = 1] = "Yes";
})(isFlag || (isFlag = {}));
function respond(recipient, message) {
    return recipient + message;
}
var result = respond("Princess Caroline", isFlag.Yes);
console.log(result, 'result');
// 字符串枚举
// 字符串枚举的概念很简单，但是有细微的 运行时的差别。 
// 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// 计算的和常量成员
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
console.log(E.X); // 它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0
// 反向映射
// 创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a];
console.log(nameOfA);
console.log(typeof nameOfA);

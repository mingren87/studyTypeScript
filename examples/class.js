var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hello ' + this.greeting;
    };
    return Greeter;
}());
var newGreet = new Greeter('LiuXinHeng');
console.log(newGreet.greet());
var UserInfo = /** @class */ (function () {
    function UserInfo(userName, userAge, userPhone) {
        this.userName = userName;
        this.userAge = userAge;
        this.userPhone = userPhone;
    }
    UserInfo.prototype.getUserInfo = function () {
        return {
            name: this.userName,
            age: this.userAge,
            phone: this.userPhone
        };
    };
    return UserInfo;
}());
var userInfo = new UserInfo('LiuXinHeng', 30, 15010005655);
console.log(userInfo.getUserInfo());
// 类的继承
var Animal = /** @class */ (function () {
    function Animal(age, name) {
        this.age = age;
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal moved " + distance + "m");
    };
    Animal.prototype.getInfo = function () {
        console.log(this.name, this.age);
        return this.name + this.age;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(age, name) {
        return _super.call(this, age, name) || this; // 通过super关键词，继承父类的构造函数
    }
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 1000; }
        console.log("dog move " + distance + "m");
        _super.prototype.move.call(this, distance); // 使用super关键词，调用父类的方法
    };
    Dog.prototype.bark = function () {
        console.log('woof! woof !');
    };
    return Dog;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(age, name) {
        return _super.call(this, age, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 20000; }
        console.log('Gallaping.....');
        _super.prototype.move.call(this, distance + 5000);
    };
    Horse.prototype.getAnimalInfo = function () {
        _super.prototype.getInfo.call(this);
    };
    return Horse;
}(Animal));
var dog = new Dog(5, '小熊');
console.log(dog.getInfo());
console.log(dog.bark());
console.log(dog.move());
var horse = new Horse(12, '小马');
console.log(horse.move());
console.log(horse.getAnimalInfo());
// 公共、私有与受保护修饰符
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getUserInfo = function () {
        return this.name + this.age;
    };
    return Person;
}());
// new Person('Li', 25).age // 私有属性，无法访问
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super.call(this, 'Liu', 0) || this;
    }
    return Child;
}(Person));
var Wife = /** @class */ (function () {
    function Wife(name) {
        this.name = name;
    }
    return Wife;
}());
// 保护修饰符
var Job = /** @class */ (function () {
    function Job(name) {
        this.jobName = name;
    }
    return Job;
}());
var Sales = /** @class */ (function (_super) {
    __extends(Sales, _super);
    function Sales(name, age) {
        var _this = _super.call(this, name) || this;
        _this.saleAge = age;
        return _this;
    }
    Sales.prototype.getSaleName = function () {
        return "my name is " + this.jobName + ", age " + this.saleAge;
    };
    return Sales;
}(Job));
var sales = new Sales('xinHeng', 30);
console.log(sales.getSaleName());
// console.log(sales.jobName) // 该属性受到保护

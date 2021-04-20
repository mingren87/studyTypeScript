// 抽象类 -- 高级技巧
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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.move = function () {
        console.log('roaming the earth .....');
    };
    return Person;
}());
// 实现抽象类
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting ad Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10a  m');
    };
    AccountingDepartment.prototype.genterateReports = function () {
        console.log('Generating accounting reports ....');
    };
    return AccountingDepartment;
}(Department));
var department;
// department = new Department() // 不能直接实例化这个抽象类
department = new AccountingDepartment(); // 只能实例化派生类
console.log(department.printName());
console.log(department.printMeeting());
// department.genterateReports // 在Department类中并没有定义,因此才会报错
// 类的一些高级技巧
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello，' + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = 'Hello, there'; // 静态属性
    return Greeter;
}());
var greeter;
greeter = new Greeter();
console.log(greeter.greet());
// 重新创建一个Greeter的构造器
var greeterMaker = Greeter; // 获取Greeter类的类型，而不是实例的类型，获取到的是静态的类型
greeterMaker.standardGreeting = 'Hey there';
var greeter2 = new greeterMaker();
console.log(greeter2.greet());

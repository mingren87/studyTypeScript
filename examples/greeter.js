var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + '' + lastName;
    }
    return User;
}());
function greeter(person) {
    return "hello" + person.firstName + '' + person.lastName;
}
// let user:Person = {
//   firstName: '刘',
//   lastName: '信恒'
// }
var user = new User('刘', '信恒');
console.log(greeter(user));

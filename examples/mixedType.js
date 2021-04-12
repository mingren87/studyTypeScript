// 混合类型
// 希望一个对象上有多种类型
// getCounter函数 放回一个Counter 属性
function getCounter() {
    var counter = (function (star) {
        console.log(star, 'star');
    }); // 强制断言为Counter类型
    counter.interval = 12;
    counter.reset = function () {
    };
    return counter;
}
var action = getCounter();
action(10);
action.interval = 20;
action.reset();

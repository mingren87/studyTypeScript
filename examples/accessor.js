// 类 -- 存取器 和 静态属性
var password = 'password1';
var Personal = /** @class */ (function () {
    function Personal() {
    }
    Object.defineProperty(Personal.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (password && password === 'password') {
                this._fullName = newName;
            }
            else {
                console.log('Error password !!!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Personal;
}());
var job = new Personal();
job.fullName = '前端';
if (job.fullName) {
    console.log(job.fullName);
}
// 静态属性
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.getDistance = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    Grid.origin = {
        x: 0,
        y: 0
    };
    return Grid;
}());
var grid1 = new Grid(1.2);
var grid2 = new Grid(5.2);
console.log(grid1.getDistance({
    x: 3,
    y: 4
}));
console.log(grid1.getDistance({
    x: 6,
    y: 8
}));

// 类 -- 存取器 和 静态属性


let password = 'password1'
class Personal {
  private _fullName: string

  get fullName():string{
    return this._fullName
  }
  set fullName(newName:string) {
    if (password && password=== 'password') {
      this._fullName = newName
    }else {
      console.log('Error password !!!')
    }
  }
}

let job = new Personal()
job.fullName = '前端'
if (job.fullName) {
  console.log(job.fullName)
}


// 静态属性
class Grid {
  static origin = {
    x: 0,
    y: 0
  }
  scale: number
  constructor(scale:number) {
    this.scale = scale
  }
  getDistance(point: {x: number; y:number}){
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist*xDist+yDist*yDist) * this.scale
  }
}

let grid1 = new Grid(1.2)
let grid2 = new Grid(5.2)

console.log(grid1.getDistance({
  x: 3, 
  y: 4
}))

console.log(grid1.getDistance({
  x: 6, 
  y: 8
}))




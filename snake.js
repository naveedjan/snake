class Snake {
  constructor(maxLength) {
    // where we do setup
    this.points = []
    this.maxLength = maxLength
    this.time = 0
  }

  push(point) {
    this.points.push(point)
    this.points = this.points.slice(-1 * this.maxLength)
  }

  draw() {
    noFill()
    strokeWeight(4)
    stroke("#ffffff33")
   	beginShape()
    this.points.forEach(point => {
      let n = noise (point.x, point.y, this.time) * 50 - 25
      curveVertex(point.x + n, point.y + n)
    })
    endShape()

    this.time = this.time + 0.02
  }
}

class Letter {
  constructor(text, position, rotation) {
    // this is setup
    this.text = text
    this.position = position
    this.rotation = rotation
  }

  draw() {
    textSize(64)
    textFont("Adieu Light")
    textAlign(CENTER, CENTER)
    noStroke()
    fill('#e9ddd5')
    
    push()
    translate(this.position.x, this.position.y)
    rotate(this.rotation)
    text(this.text, 0, 0)
    pop()
  }
}

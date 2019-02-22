function Clouds(game, x, y, dy, src) {

  this.game = game;

  this.x = x
  this.y = y

  this.x0 = this.x
  this.y0 = this.y

  this.img = new Image()
  this.img.src = src

  this.w = 260
  this.h = this.w

  this.dy = dy
  this.dx = 2

  this.vx = 1
  this.vy = 1

  this.gravity = 0.2

  this.direction = 1
  this.totalDistance = 0

}

Clouds.prototype.draw = function() {

  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

}

Clouds.prototype.move = function() {

  this.y += this.dy
  this.vy -= 1

  if(this.y <= this.y0){  
  this.vy = 1
  this.y = this.y0;

  } else {  
    this.vy += this.gravity
  }

  this.floatAll()

}


Clouds.prototype.floatAll = function() {

  this.x += this.dx * this.direction
  this.totalDistance += this.dx


  if(this.totalDistance === 250 || this.x + this.w > this.game.canvas.width || this.x < 0) {
    this.totalDistance = 0
    this.direction *= -1
  }

}



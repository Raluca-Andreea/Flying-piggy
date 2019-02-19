function Player(game) {

  this.game = game

  this.x0 = this.game.clouds[0].x
  this.y0 = this.game.clouds[0].y

  this.x = this.x0
  this.y = this.y0

  this.vy = 3
  this.vx = 1

  this.w = 150
  this.h = this.w * 0.81

  this.img = new Image()
  this.img.src = "img/Flying-pig.png"

  this.img.frames = 4
  this.img.frameIndex = 0

  this.gravity = 0.3

  this.direction =
  {
    top : false,
    left : false,
    right : false
  }

  this._setPlayerHandlers()

}

Player.prototype.draw = function() {

  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h 
  )

}


Player.prototype._setPlayerHandlers = function() {

  document.onkeydown = function(e) {

    switch(e.keyCode) {

      case this.game.keys.RIGHT_ARROW:
          this.direction.right = true
          this.flipImage()
          
          if(this.x + this.w <= this.game.canvas.width)
          this.move();
          
          this.animateImg();
          break;

      case this.game.keys.LEFT_ARROW:
          this.direction.left = true
          this.flipImageReverse()

          if(this.x > 0)
          this.move();
        
          this.animateImg();
          break;

      case this.game.keys.TOP_KEY:
          this.direction.top = true

          this.move();
          break;

    }

  }.bind(this)

  document.onkeyup = function(e) {

    switch(e.keyCode) {

      case this.game.keys.RIGHT_ARROW:
        this.direction.right = false
        this.img.frameIndex = 0   
        break;

      case this.game.keys.LEFT_ARROW:
        this.direction.left = false
        this.img.frameIndex = 3
        break;

      case this.game.keys.TOP_KEY:
        this.direction.top = false
        this.img.frameIndex = 0   

        break;

    }

  }.bind(this)

 }



Player.prototype.flipImage = function() {

  this.img.src = "img/Flying-pig.png"

}


Player.prototype.flipImageReverse = function() {

  this.img.src = "img/Flying-pig-reverse.png"

}


Player.prototype.animateImg = function() {

  if(this._setPlayerHandlers) {

    this.img.frameIndex += 1;

    if(this.img.frameIndex > 3) this.img.frameIndex = 0;

  } 

}

Player.prototype.move = function() {

  if(this.direction.right) {
    this.x += 10
    this.vx += 5
    
  }

  if(this.direction.left) {
    this.x -= 10
    this.vx -= 5
  }

  if(this.direction.top) {
    this.y -= 1
    this.vy -= 1.5

  }

  if(this.y >= this.y0 && (this.game.clouds[0].x < this.x + this.w / 2) && (this.x + this.w / 2 < (this.game.clouds[0].x + this.game.clouds[0].w)) ){  
  this.vy = 1
  this.y = this.y0;

} else {  
  this.vy += this.gravity
  this.y += this.vy
}

}








// if(this.y >= this.y0){  
//   this.vy = 1
//   this.y = this.y0;

// } else {  
//   this.vy += this.gravity
//   this.y += this.vy
// } 

// if(this.y >= this.y0 && (this.x + this.w > this.game.clouds[0].cloudX) && (this.x < (this.game.clouds[0].cloudX + this.game.clouds[0].cloudW))){  
//   this.vy = 1
//   this.y = this.y0;

// } else {  
//   this.vy += this.gravity
//   this.y += this.vy
// }
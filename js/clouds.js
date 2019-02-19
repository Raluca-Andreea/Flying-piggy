function Clouds(game) {

  this.game = game;

  this.x = this.game.canvas.width * 0.2
  this.y = this.game.canvas.width * 0.4

  this.x0 = this.x
  this.y0 = this.y

  this.img = new Image()
  this.img.src = "img/cloud-01.png"

  this.w = 260
  this.h = this.w

  this.dy = 1.5
  this.dx = 4

  this.vx = 1
  this.vy = 1

  this.gravity = 0.2

}

Clouds.prototype.draw = function() {

  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

}

Clouds.prototype.move = function() {

  this.y += this.dy

}

Clouds.prototype.float = function() {

  this.y -= this.dy
  this.vy += 0.01

 
    if(this.y > this.y0) {
      this.vy = 1
      this.y= this.y0

    } else {
      this.cloudVy += this.gravity
      this.y += this.vy

    }

}


// Clouds.prototype.float = function() {

//   this.x -= this.dx
//   this.vx += 0.001

 

//     if(this.x > this.x0) {
//       this.vx = 1
//       this.x= this.x0

//     } else {
//       this.vx += this.gravity
//       this.x += this.vx

//     }
  
// }









 // if(this.cloudX < this.cloudW * 1.2) {

    // this.cloudX += this.cloudDx
    // this.cloudVx += 0.1 



  // } else if(this.cloudX > this.cloudW * 1.2) {

  //   this.cloudX -= this.cloudDx
  //   this.cloudVx -= 0.1  
    

  //   if(this.cloudY  > this.cloudY0) {
  //     this.cloudVy = 1
  //     this.cloudY = this.cloudY0
  //   } else {
  //     // this.cloudVy += this.gravity
  //     this.cloudY += this.cloudVy
  //   }
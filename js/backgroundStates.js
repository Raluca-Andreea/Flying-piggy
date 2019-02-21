function BackgroundState(game, src) {
  this.game = game;

  this.x = 0
  this.y = 0

  this.img = new Image()
  this.img.src = src

 
}

BackgroundState.prototype.draw = function() {

  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.w, this.game.h)

}

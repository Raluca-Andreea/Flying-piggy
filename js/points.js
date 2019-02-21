function Points(game, x, y) {

  this.game = game

  this.x = x
  this.y = y

}

Points.prototype.draw = function() {

  this.game.ctx.fillStyle = '#f4df42'
  this.game.ctx.arc(this.game.canvas.width / 2, this.game.canvas.height / 2, 20, 0, Math.PI * 2)
  this.game.ctx.stroke()
  this.game.ctx.fill()

}

Points.prototype.move = function() {

  this.y += vy

}


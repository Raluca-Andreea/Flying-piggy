var ScoreBoard = {
  update: function (score, ctx, img) {

    ctx.font = "50px sans-serif";
    ctx.fillStyle = "rgb(242, 202, 43)";
    ctx.fillText(Math.floor(score), 36.5, 50);

  }
}

    
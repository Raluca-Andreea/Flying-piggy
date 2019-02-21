var Game = {

  canvas: undefined,
  ctx: undefined,
  w: undefined,
  h: undefined,
  fps: 60,
  keys: {
    TOP_KEY: 38,
    RIGHT_ARROW: 39,
    LEFT_ARROW: 37
  },

  opVariable: 0.009,

  init: function (id) {

    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext("2d")

    this.start()

  },


  start: function () {

    this.setDimensions()
    this.setHandlers()
    this.reset()


    this.interval = setInterval(function () {
      // console.time()
      this.clear()
      this.frameCounter++
      this.moveFirstCloud()


      if (this.frameCounter > 1000) {
        this.frameCounter = 0
      }



      if (this.frameCounter % 40 === 0) {

        if (this.left) {
          this.generateLeftClouds()
          this.left = false
        } else {
          this.generateRightClouds()
          this.left = true
        }
      }


      if (this.frameCounter % 150 === 0) {
        this.dyCloud += 0.2
      }




      // this.background01.draw()
      this.backgrounds['background01'].background.draw()
      Object.values(this.backgrounds).forEach(function (background) {
        // debugger
        this.drawBackgrounds(background.background, background.opacity)
      }.bind(this))
      this.ctx.globalAlpha = 1
      // this.drawBackgrounds(this.background01)

      // this.ctx.globalAlpha = this.opBackground07
      // this.background07.draw()

      // this.ctx.globalAlpha = this.opBackground06
      // this.background06.draw()

      // this.ctx.globalAlpha = this.opBackground05
      // this.background05.draw()

      // this.ctx.globalAlpha = this.opBackground04
      // this.background04.draw()

      // this.ctx.globalAlpha = this.opBackground03
      // this.background03.draw()

      // this.ctx.globalAlpha = this.opBackground0
      // this.background02.draw()

      // this.ctx.globalAlpha = this.opBackground01
      // this.background01.draw()

     



      for(var i = 0; i < this.keysBackgrounds.length; i++ ){
        // // debugger
        // this.condicinalOpacity(this.backgrounds[this.keysBackgrounds[i]])
        this.backgrounds[this.keysBackgrounds[i]].opacity = this.condicinalOpacity(this.backgrounds[this.keysBackgrounds[i]].opacity)
        // console.log(this.backgrounds[this.keysBackgrounds[i]].opacity)
        if(this.backgrounds[this.keysBackgrounds[i]].opacity !== 0 && this.backgrounds[this.keysBackgrounds[i - 1]]){
           this.backgrounds[this.keysBackgrounds[i - 1]].opacity = 0
        }
        if(!this.backgrounds[this.keysBackgrounds[i]].opacity){
          if(this.backgrounds[this.keysBackgrounds[this.keysBackgrounds.length - 1]].opacity == 0){
            this.resetBackgrounds();
          }
          // console.log('continue')
          continue
        } else{
          // console.log('break')
          break
        }


      }

      // if (Math.round(this.opBackground01) !== 0) {

      //   this.opBackground01 -= this.opVariable


      // } else if (Math.round(this.opBackground02) !== 0) {

      //   this.opBackground01 = 0

      //   this.opBackground02 -= this.opVariable



      // } else if (Math.round(this.opBackground03) !== 0) {

      //   this.opBackground02 = 0

      //   this.opBackground03 -= this.opVariable


      // } else if (Math.round(this.opBackground04) !== 0) {

      //   this.opBackground03 = 0

      //   this.opBackground04 -= this.opVariable


      // } else if (Math.round(this.opBackground05) !== 0) {

      //   this.opBackground04 = 0

      //   this.opBackground05 -= this.opVariable



      // } else if (Math.round(this.opBackground06) !== 0) {

      //   this.opBackground05 = 0

      //   this.opBackground06 -= this.opVariable



      // } else if (Math.round(this.opBackground07) !== 0) {

      //   this.opBackground06 = 0

      //   this.opBackground07 -= this.opVariable

      // }




      // if (Math.round(this.opBackground06) !== 0) {


      //   this.opBackground05 += this.opVariable

      //   console.log("6 invers")

      // } else if (Math.round(this.opBackground05) !== 0) {

      //   this.opBackground04 = 0

      //   this.opBackground05 -= this.opVariable

      //   console.log("5 invers")


      // } else if (Math.round(this.opBackground04) !== 0) {

      //   this.opBackground03 = 0

      //   this.opBackground04 -= this.opVariable

      // } else if (Math.round(this.opBackground03) !== 0) {

      //   this.opBackground02 = 0

      //   this.opBackground03 -= this.opVariable

      // } else if (Math.round(this.opBackground02) !== 0) {

      //   this.opBackground01 = 0

      //   this.opBackground02 -= this.opVariable

      // }

      // else {
      //   this.opBackground01 = 1
      //   this.opBackground02 = 1
      //   this.opBackground03 = 1
      //   this.opBackground04 = 1
      //   this.opBackground05 = 1
      //   this.opBackground06 = 1
      //   this.opBackground07 = 1

      // }


      this.drawAll()
      this.moveAll()

      this.clearClouds()

      // if(this.player.y === this.canvas.height) this.gameOver()
      // console.timeEnd()

    }.bind(this), 1000 / this.fps)

  },


  stop: function () {

    clearInterval(this.interval);

  },

  gameOver: function () {

    this.stop();

    if (confirm("Game Over. Wanna play again?")) {

      this.reset()
      this.start()

    }

  },


  setDimensions: function () {

    this.w = innerWidth
    this.h = innerHeight

    this.canvas.setAttribute("width", this.w)
    this.canvas.setAttribute("height", this.h)

  },

  setHandlers: function () {

    window.onresize = function () {
      this.setDimensions()
    }.bind(this)

  },


  reset: function () {
    this.backgrounds = {
      background01: {
        background: new Background(this, "img/background-01.jpg"),
        opacity: 1
      },
      background02: {
        background: new Background(this, "img/background-02.jpg"),
        opacity: 1
      },
      background03: {
        background: new Background(this, "img/background-03.jpg"),
        opacity: 1
      },
      background04: {
        background: new Background(this, "img/background-04.jpg"),
        opacity: 1
      },
      background05: {
        background: new Background(this, "img/background-05.jpg"),
        opacity: 1
      },
      background06: {
        background: new Background(this, "img/background-06.jpg"),
        opacity: 1
      },
      background07: {
        background: new Background(this, "img/background-07.jpg"),
        opacity: 1
      }
    }
    this.backgrounds.background08 = {
      background: this.backgrounds.background06.background,
        opacity: 1
    }
    this.backgrounds.background09 = {
      background: this.backgrounds.background05.background,
      opacity: 1
    }
    this.backgrounds.background10 = {
      background: this.backgrounds.background04.background,
      opacity: 1
    }
    this.backgrounds.background11 = {
      background: this.backgrounds.background03.background,
      opacity: 1
    }
    this.backgrounds.background12 = {
      background: this.backgrounds.background02.background,
      opacity: 1
    }
    this.keysBackgrounds = Object.keys(this.backgrounds).reverse();




    this.clouds = []
    this.dyCloud = 4;
    this.generateFirstCloud()

    this.player = new Player(this)

    this.frameCounter = 0
    this.colision = this.clouds[0]
    this.left = true
  },


  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },


  generateLeftClouds: function () {

    var randomX = Math.floor(Math.random() * ((this.canvas.width / 2 - 200) + 1))

    this.clouds.push(new Clouds(this, randomX, -260, this.dyCloud, "img/cloud-01.png"))

  },

  generateRightClouds: function () {

    var randomX = Math.floor(Math.random() * ((this.canvas.width - 400) - ((this.canvas.width / 2) + 200) + 1)) + ((this.canvas.width / 2) + 200)

    this.clouds.push(new Clouds(this, randomX, -260, this.dyCloud, "img/cloud-01-b.png"))

  },

  generateFirstCloud: function () {

    this.clouds.push(new Clouds(this, this.canvas.width * 0.1, this.canvas.height * 0.6, 0, "img/cloud-01.png"))

  },



  drawAll: function () {

    this.player.draw()
    this.clouds.forEach(function (cloud) {
      cloud.draw()
    })

  },

  moveAll: function () {

    for (var i = 1; i < this.clouds.length; i++) {
      this.clouds[i].move()
    }

    this.generateColision()
    this.player.move()

  },

  clearClouds: function () {
    this.clouds = this.clouds.filter(function (cloud) {
      return cloud.y <= this.canvas.height && (cloud.x <= this.canvas.width || cloud.x >= 0);
    }.bind(this));
  },



  generateColision: function () {

    var actualCloud = this.clouds.find(function (cloud) {

      return this.player.y + this.player.h - 100 >= cloud.y && this.player.y < cloud.y + cloud.h - 150 && this.player.x + this.player.w / 2 > cloud.x && this.player.x < cloud.x + cloud.w && this.player.vy > 0


    }.bind(this))
    // console.log(actualCloud)
    if (actualCloud) {
      this.player.cloudsColision = actualCloud // asigna la nube actual al player
      this.player.y0 = actualCloud.y // asign la posY de la nube actual 
      this.player.y = this.player.y0  // sin esta condicion no puede saltar
    } else {
      this.player.y0 = this.canvas.height
    }

  },

  moveFirstCloud: function () {

    setTimeout(function () {


      this.clouds[0].move()

    }.bind(this), 3000)

  },
  drawBackgrounds: function (background, opacity) {
    this.ctx.globalAlpha = opacity;
    // console.log(background)
    background.draw()
  },
  condicinalOpacity: function(opBackground){
    if (opBackground !== 0) {
      
      opBackground -= this.opVariable;
      return Math.round(opBackground * 100) / 100
    }    
    // console.log(opBackground)
  },
  resetBackgrounds: function(){
    // console.log('-----entra-----')
    for(key in this.backgrounds){
      this.backgrounds[key].opacity = 1;
    }
  }



}


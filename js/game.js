var Game = {

  canvas: undefined,
  ctx: undefined,
  w: undefined,
  h: undefined,
  fps: 60,
  keys: {
    TOP_KEY : 38,
    RIGHT_ARROW: 39,
    LEFT_ARROW : 37
  },
  
  clouds: [],

  init: function(id) {

    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext("2d")
  
    this.start()    
  
  },


  start: function() {

    this.setDimensions()
    this.setHandlers()
    this.reset()
    
    this.interval = setInterval(function () {

      this.clear()
      this.frameCounter ++
      

      if(this.frameCounter > 10000) {
        this.frameCounter = 0
      }
      if (this.framesCounter % 50 === 0) {
        this.generateClouds();
      }

      
      // this.generateClouds();
      

      this.drawAll()
      this.moveAll()
      this.floatAll()

    }.bind(this), 1000 / this.fps)

  },


  setDimensions: function() {

    this.w = innerWidth
    this.h = innerHeight

    this.canvas.setAttribute("width", this.w)
    this.canvas.setAttribute("height", this.h)
    
  },

  setHandlers: function() {

    window.onresize = function() {
      this.setDimensions()
    }.bind(this)

  },


  reset: function() {

    this.background = new Background(this)
    this.clouds.push(new Clouds(this))
    this.player = new Player(this)
    this.frameCounter = 0
    this.colision = this.clouds[0]
   
  },


  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },



  drawAll: function() {

    this.background.draw()
    this.player.draw()
    this.clouds.forEach(function(cloud){
    cloud.draw()})

  },

  moveAll: function() {

    // this.clouds.forEach(function(cloud) {cloud.move()})
    // this.pepe()
    this.player.move()

  },

  floatAll: function() {

    this.clouds.forEach(function(cloud) {
      cloud.float()
    }.bind(this))
    

  },
  

  

  





}


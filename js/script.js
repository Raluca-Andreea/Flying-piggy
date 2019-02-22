
window.onload = function() {
  
  document.onkeyup = function (e) {

    if(e.keyCode === 13) {

      var activeDOM = document.getElementsByClassName("active")
      for(var i = 0; i < activeDOM.length; i++) {
        activeDOM[i].style.display = "none"
      }

      Game.init("cerdito");

    }

  }.bind(this)

}
(function(){
  angular.module('champApp');

  angular.module('champApp').factory('Skew', Skew);

  function Skew(){
    return {display: display};

    function display(imageSrc){
      var canvas = document.getElementById('ribbon');
      var ctx = canvas.getContext('2d');
      var img = new Image();
      img.onload = function(){
        var cw = canvas.width, ch = canvas.height, height = img.height, width = img.width;
        var skew = 0.1;
        var w = width*(1+skew), h = height*(1+skew);
        var ratio = 1;

        //Maintain aspect ratio
        if(w > cw && h > ch){
          ratio = Math.min(cw/w, ch/h);
        }

        var sw = ratio*width, sh = ratio*height;
        for(var j = 1; j < 6; j++){
          var stretch = sh/2;
          var hGradient = sw;
          var wFactor = j;

          console.log(wFactor);
          for(var i = 0; i < hGradient; i++){
            stretch += (i%2)*sh/hGradient;
            ctx.drawImage(img,
              i*width/hGradient, 0, width/hGradient, height,
              i*sw/(wFactor*hGradient), sh/2-stretch/2, sw/(wFactor*hGradient), stretch);
          }
        }
      }
      img.src = imageSrc;
    }
  }
})();

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
        var w = img.width, h = img.height;
        var cw = canvas.width, ch = canvas.height;
        var ratio = 1;

        //Maintain aspect ratio
        if(w > cw && h > ch){
          ratio = Math.min(cw/w, ch/h);
        }
        var skew = 0;

        ctx.setTransform(ratio, skew, 0, ratio, 0, 0);
        ctx.drawImage(img, 0, 0);

        // for(var i = 0; i < w; i++){
        //   ctx.setTransform(1, -0.4*i/w, 0, 1, 0, 0);
        //   ctx.drawImage(img, 0, h/2-i);
        // }

      }
      img.src = imageSrc;

    }
  }
})();

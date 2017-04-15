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
          ctx.drawImage(img, 0, 0);
      }
      img.src = imageSrc;

    }
  }
})();

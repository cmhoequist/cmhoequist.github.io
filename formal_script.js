$(document).ready(function(){
  $('#me').hover(
    function(){
      $(this).text("Moritz Hoequist");
      $(this).width('150');
    },
    function(){
      $(this).text("M");
      $(this).width('auto');
    }
  );
});

$(window).scroll(function(){
  var win = $(window);
  var scrollVal = win.scrollTop();
  if(scrollVal>=10){
    $(".navbar-menu").css("border-bottom","2px solid #888888");
    $(".navbar-menu").css("background","#f3f0da");
  }
  else{
    $(".navbar-menu").css("border-bottom","none");
    $(".navbar-menu").css("background","white");
  }
});

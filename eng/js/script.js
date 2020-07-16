$(window).scroll(function(){
    var sc= $(window).scrollTop();
    if(sc>30) {
        $('£nav').addClass('myfixedafter');

    }else{
        ('£nav').removeclass('myfixedafter');
    }
});



/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  
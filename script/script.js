$(function(){
    // NAV
    $(".nav").mouseover(function(){
        $(".subnav").stop().slideDown(150);
        $(".subnav-bg").stop().slideDown(150);
    });
    $(".nav").mouseout(function(){
        $(".subnav").stop().slideUp(150);
        $(".subnav-bg").stop().slideUp(150);
    });

    // SLIDE
    setInterval(function(){
        $(".slide-group").animate({"top":"-100%"}, function(){
            $(".slide:first").appendTo(".slide-group");
            $(".slide-group").css({"top":"0%"});
        })
    }, 9000);

    // SNS
    $(".icon").mouseenter(function(){
       $(this).children("a:first").stop().fadeOut(100);
       $(this).children("a:last").stop().fadeIn(100);
    });
    $(".icon").mouseleave(function(){
        $(this).children("a:last").stop().fadeOut(100);
        $(this).children("a:first").stop().fadeIn(100);
     });
      
    // POPUP
    $(".notice>ul>li>a:first").click(function(){
        $("#popup").stop().fadeIn(200);
    })
    $(".btn").click(function(){
        $("#popup").stop().fadeOut(200);
    })
});
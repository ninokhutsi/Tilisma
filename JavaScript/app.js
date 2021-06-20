$(document).ready(function(){
    $(".burger").on("click", function(e){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        };

        if($("#navigation-list").hasClass("active")){
            $("#navigation-list").removeClass("active");
        }else{
            $("#navigation-list").addClass("active")
        }
    })

    // change header background color while scrolling

    $(function(){
        $(window).on("scroll", function(){
            if($(window).scrollTop() > 50) {
                $(".header").addClass("active");
            }else{
                $(".header").removeClass("active");
            }
        })
    })
   
    //shape animation on scroll
    //(selector).animate({styles},speed,easing,callback)
    $(function(){
        $(window).on("scroll", function(){
            if($(window).scrollTop() > 600){
                $(".shape").animate({height: "480px", borderLeftWidth: "1px"}, 1000);
                $(".shape").animate({width: "270px", borderBottomWidth: "1px"}, 1000)
            }
        })
    })
    //about wine section shape animation
    $(function(){
        $(window).on("scroll", function(){
            if($(window).scrollTop() > 1000){
                $(".shape-right").animate({height:"480px", borderRightWidth: "1px"},1000);
                $(".shape-right").animate({width: "270px", borderBottomWidth: "1px"}, 1000)
            }
        })
    })
    //move image
    $(function(){
        $(window).on("scroll", function(){
            if($(window).scrollTop() > 20){
                $("#glass").animate({left: "47%", marginTop: "-80px"}, 2000);
            }
        })
    })

    // dropdown toggle
    $(".dropdown").mouseenter(function(){
        $(".dropdown-content").slideDown("slow");
      });
    $(".dropdown").mouseleave(function(){
        $(".dropdown-content").slideUp("slow");
    })

}) 


// $(".slider-arrow-left").on("click", function(e){
    //     alert("click")
    // })
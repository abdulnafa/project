jQuery(document).ready(function($){


    // --------------------------------------------- First BOx -------------------------- 

$(".firstbox_trade .mothlytab").on("click",function(){

    $(".firstbox_trade .tab_item").removeClass("active");
    $(this).addClass("active");

$(".firstbox_trade .monthly_content_div").addClass("active");
$(".firstbox_trade .yearly_content_div").removeClass("active");


});


$(".firstbox_trade .yearlytab").on("click",function(){

    $(".firstbox_trade .tab_item").removeClass("active");
    $(this).addClass("active");

$(".firstbox_trade .monthly_content_div").removeClass("active");
$(".firstbox_trade .yearly_content_div").addClass("active");


});




    // --------------------------------------------- Second BOx -------------------------- 

    $(".secondbox_trade .mothlytab").on("click",function(){

        $(".secondbox_trade .tab_item").removeClass("active");
        $(this).addClass("active");
    
    $(".secondbox_trade .monthly_content_div").addClass("active");
    $(".secondbox_trade .yearly_content_div").removeClass("active");
    
    
    });
    
    
    $(".secondbox_trade .yearlytab").on("click",function(){
    
        $(".secondbox_trade .tab_item").removeClass("active");
        $(this).addClass("active");
    
    $(".secondbox_trade .monthly_content_div").removeClass("active");
    $(".secondbox_trade .yearly_content_div").addClass("active");
    
    
    });





    // -------------------------------------- Testimonial  ------------------------------ 


    $('.testimonial_carousel.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });







    // --------------------------- Customer Registration ------------------------ 



    $(".next_btn").on("click",function(){


        if ($(".step_div.active").next(".step_div").length) { 
            $(".step_div.active").removeClass("active") 
                .next(".step_div").addClass("active");
        }

        if($(".tab_line.active").next(".tab_line").length){
            $(".tab_line.active").removeClass("active").next(".tab_line").addClass("active");
        }
 if($(".tab_texts.active").next(".tab_texts").length){
            $(".tab_texts.active").removeClass("active").next(".tab_texts").addClass("active");
        }

        if ($(".step_div.active").next().is(":last-child")) {
            $(".next_btn").text("Confirm");
        }


    });

    $(".cancel_btn").on("click",function(){


       $(".step_div").removeClass("active").first().addClass("active");

       $(".tab_line").removeClass("active").first().addClass("active");
       $(".tab_texts").removeClass("active").first().addClass("active");
       $(".next_btn").text("Next");


    });








});


$.when( $.ready ).then(function() {
  // Run code


  
   
     $('body').scrollspy({ target: '#navbar-example2' });
     
     $("#button-landing").click( function(){
         $('html, body').animate({
             scrollTop: $("#about").offset().top}, 2000);
     });

     $("#about-link").click( function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top}, 2000);
    });

    $("#work-link").click( function(){
        $('html, body').animate({
            scrollTop: $("#my-work").offset().top}, 2000);
    });
    
    // theatherMode()
    changeNavbar();
      $(".navbar-toggler").on("click", function(){
         $( ".navbar-toggler-icon" ).toggle();
         $( "#x-button" ).toggle();
      })
     
      $('.zoom').zoom({ on: 'click' });

$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    if($("#first-image").hasClass("active")){
          $("#work-content").empty();
          $("#work-content").append("<p>Test 1</p>");
      }

      if($("#second-image").hasClass("active")){
        $("#work-content").empty();
        $("#work-content").append("<p>Test 2</p>");
    }
    if($("#third-image").hasClass("active")){
        $("#work-content").empty();
        $("#work-content").append("<p>Test 3</p>");
    }
    if($("#fourth-image").hasClass("active")){
        $("#work-content").empty();
        $("#work-content").append("<p>Test 4</p>");
    }

    
      })

      sr.reveal('.about-right');
      sr.reveal('.about-left');
      sr.reveal('#heading-first');
      sr.reveal('.work-right');
      sr.reveal('.work-left');

      function changeNavbar(){
        var scroll_start = 0;
        var startchange = $('#home');
        let startchange2 = $('#my-work');
        var offset = startchange.offset();
        let offset2 = startchange2.offset();
        $(document).scroll(function() { 
           scroll_start = $(this).scrollTop();
           if(scroll_start > offset.top && scroll_start < offset2.top) {
            console.log(scroll_start);
               $('.navbar-brand').css("color", "#0F1018");
               $('#navbar-example2').css({'background-color': '#FFFFFF'});
               $('.nav-link').removeClass('nav-links-1').addClass('nav-links-2');
            } 
            else if(scroll_start > offset2.top){
                console.log("test2");
                $('.navbar-brand').css("color", "#FFFFFF");
               $('#navbar-example2').css({'background-color': '#0F1018'});
               $('.nav-link').removeClass('nav-links-2').addClass('nav-links-1');
               $('#my-work').css("background", "#0F1018");
            }
            
            else {
               $('.navbar-brand').css("color", "#FFFFFF");
               $('#navbar-example2').css({'background-color': '#0F1018'});
               $('.nav-link').removeClass('nav-links-2').addClass('nav-links-1');
            }
        });
       }

    //    function theatherMode(){
    //     let scroll_start2 = 0;
    //     let startchange2 = $('#my-work');
    //     let offset2 = startchange2.offset();
    //     $(document).scroll(function() { 
    //        scroll_start2 = $(this).scrollTop();
    //        if(scroll_start2 > offset2.top) {
    //            $('.navbar-brand').css("color", "#FFFFFF");
    //            $('#navbar-example2').css({'background-color': '#0F1018'});
    //            $('.nav-link').removeClass('nav-links-2').addClass('nav-links-1');
    //            $('#my-work').css("background", "#0F1018");
    //         } else {
    //             $('.navbar-brand').css("color", "#0F1018");
    //             $('#navbar-example2').css({'background-color': '#FFFFFF'});
    //             $('.nav-link').removeClass('nav-links-1').addClass('nav-links-2');
    //         }
    //     });
    //    }
});
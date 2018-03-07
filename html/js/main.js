// tooltip

"use strict";
$('[data-toggle="tooltip"]').tooltip()

// Normalize Carousel Heights - pass in Bootstrap Carousel items.
$.fn.carouselHeights = function() {

    var items = $(this), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    var normalizeHeights = function() {

        items.each(function() { //add heights to array
            heights.push($(this).height()); 
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function() {
            $(this).css('min-height',tallest + 'px');
        });
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        //reset vars
        tallest = 0;
        heights.length = 0;

        items.each(function() {
            $(this).css('min-height','0'); //reset min-height
        }); 
        normalizeHeights(); //run it again 
    });

};

jQuery(function($){

    $(window).on('load', function(){
        $('.carousel-inner-test .carousel-item-test').carouselHeights();
    });

});

jQuery(function($){

    $(window).on('load', function(){
        $('.home-carousel .carousel-item-test').carouselHeights();
    });

});


// RIPPLES EFFECT
function ripplesEffect(e) {
    var waves, d, x, y;
    
    if($(this).find('.waves').length === 0) {
        $(this).prepend('<span class="waves"></span>');
    }
     
    waves = $(this).find('.waves');
    waves.removeClass('ripple');
     
    if(!waves.height() && !waves.width()) {
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        waves.css({height: d, width: d});
    }
    
    x = e.pageX - $(this).offset().left - waves.width()/2;
    y = e.pageY - $(this).offset().top - waves.height()/2;
     
    waves.css({top: y+'px', left: x+'px'}).addClass('ripple');
};

$(document).ready(function() {
    $(".newsCarousel").carousel();
});



$(document).ready(function(){
    $('.btn, .ripples').on('click', ripplesEffect);
});

$(document).ready(function(){
  $('.menu-toggle').on('click',function(){
    $('.menu-toggle').toggleClass('active');
    $('.top').toggleClass('topbottom-expanded');
    $('.bottom').toggleClass('topbottom-expanded');
    $('#menu-expansion').toggleClass('expanded');

    if($(".row-ul").css("display") == "none") {
        $(".row-ul").show();
    } else {
        $(".row-ul").hide();
    }
  });
});

$(document).ready(function() {
    if($("#carouselIndicators")) {
        var bannerCarousel = new Hammer(document.getElementById("carouselIndicators"));
        bannerCarousel.on("swipeleft", function() {
            $(".fa-long-arrow-right").click();
        });

        bannerCarousel.on("swiperight", function() {
            $(".fa-long-arrow-left").click();
        });

    }

    if($("#carouselControls")) {
        var testimonialsCarousel = new Hammer(document.getElementById("carouselControls"));
        //var newsCarousel = new Hammer(document.getElementByClassName("news-carousel"));
        

        testimonialsCarousel.on("swipeleft", function() {
            $("a.carousel-control-next").click();
        }); 

        testimonialsCarousel.on("swiperight", function() {
            $("a.carousel-control-prev").click();
        }); 
    }
});


var player;

$(document).ready(function() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});


function onYouTubeIframeAPIReady() {
    var currentPage = window.location.href;
    var videoID = "Ht19Nv_0uZU";

    if(currentPage.endsWith("viva-programming")) {
        videoID = "o3CWTeJDsxE";
    } else if(currentPage.endsWith("viva-app")) {
        videoID = "FiuxJQG5eEM";
    } else if(currentPage.endsWith("about-us")) {
        videoID = "krgcypUEOds";
    } else if(currentPage.endsWith("session-descriptions")) {
        videoID = "1ih3hzSsAOU";
    }

    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: videoID,
        playerVars: {
            "rel": 0,
            "showinfo": 0
        },
        events: {
            "onStateChange": onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        $("#play-button-overlay").show();
    }
}

$(document).ready(function() {
    $("#play-button-overlay img").click(function(ev) {
        player.playVideo();
        $("#play-button-overlay").hide(); // Needed as YouTube play button cannot be removed, but it goes away before fadeOut completes.
    });
});

/* JS SOLUTION TO BANNER WIDTH, USING CSS ONLY NOW TO PREVENT DELAY
$(document).ready(function() {
    var matchedWidth = $(".matchwidth").width();
    $(".fixrow").css({"width": matchedWidth + "px"});

    if($(window).width() < 576) {
        $(".fixrow").addClass("small-leftpadding");

    } else {
        $(".fixrow").removeClass("small-leftpadding");
    }

    $(window).resize(function() {
        var matchedWidth = $(".matchwidth").width();
        $(".fixrow").css({"width": matchedWidth + "px"});

        if($(window).width() < 576) {
            $(".fixrow").addClass("small-leftpadding");

        } else {
            $(".fixrow").removeClass("small-leftpadding");
        }
    });

}); 
*/

/*
$(document).ready(function() { 
  if(getUrlParameter("veins") == "yes") {
    $("#nav-viens-tab").click();
  }
});

*/

//Scroll remove secondard menu

/*
$(document).ready(function() {

    var navbarHeight = $(".navbar-dark").height();
    var totalNavHeight = $("#navbar .container-fluid .row").height();

    $(window).scroll(function(event) {
        if($(window).width() >= 768) {

            var scroll = $(window).scrollTop();

            if(scroll >= navbarHeight) {
                $(".navbar-dark").css({"height" : "0px"});
                $("#navbar .container-fluid .row").css({"height": (totalNavHeight - navbarHeight) + "px"});
                $("#navbar .container-fluid .row a.btn h5").css({"margin-top": "auto", "margin-bottom": "auto"});
                $("#navbar .container-fluid .row .col a div.pt-3").css({"padding-top": "0.3rem !important"});
            } else if(scroll == 0) {

                $(".navbar-dark").css({"height" : navbarHeight + "px"});
                $("#navbar .container-fluid .row").css({"height": (totalNavHeight) + "px"});
            }

        }

    });
});
*/


$(document).ready(function() {

    // Gets the video src from the data-src on each button
    
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    //console.log($videoSrc);
    
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?rel=0&amp;&allowfullscreen=1;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
    })
      
      
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',"");
        $("#video").css("background-color", "#000"); 
    }) 
      
    // document ready  
    });


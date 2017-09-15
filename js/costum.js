//intern anchor scroll after 5 seconds
$(document).ready(function() {
  setTimeout(function() {
    $('html,body').animate({
      scrollTop: $('#about').offset().top
    }, 700);
  }, 5000);
});


(function ($) {
  $(document).ready(function(){
 	// hide .navbar first
	$(".navbar").hide();
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 400) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
});


  }(jQuery));

		// affix: sticky nav
		//	$(document).ready(function() {
	           // $('#nav').affix({
				//offset: {
				//top: $('header').height()
			//	}
			//	});

	      //  });



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-static-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
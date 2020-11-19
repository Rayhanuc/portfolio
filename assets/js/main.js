(function($){
	"use stict";


jQuery(document).ready(function($) {
	
	$(".testimonial-list").owlCarousel({
		items: 3,
		margin: 30,
		loop: true,
		nav: false,
		navSpeed:1200,
		dots: true,
		autoplay: true,
		autoplaySpeed:1200,
		responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$(".logo-carousel").owlCarousel({
		margin: 30,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		autoplaySpeed:1200,
		responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});


	$(".portfolio-filter li").on('click', function() {
		$(".portfolio-filter li").removeClass("active");
		$(this).addClass("active");

		var filterValue = $(this).attr("data-filter");

		$(".portfolio-list").isotope({
			filter: filterValue,
			layoutMode: 'masonry',
			masonry: {
				columnWidth: '.col-md-3',
				horizontalOrder: false
			}
		});
	});

	$(".js-modal-btn").modalVideo();


});


	jQuery(window).load(function(){
		
		//Activating Isotop
		

	});
}(jQuery));
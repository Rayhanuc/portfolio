(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        // $(".embed-responsive iframe").addClass("embed-responsive-item");
        // $(".carousel-inner .item:first-child").addClass("active");
        
        // $('[data-toggle="tooltip"]').tooltip();


        //Home page Logo owl carousel
		$(".logo-carousel").owlCarousel({
			margin: 30,
			loop: true,
			nav: false,
			dots: false,
			autoplay: true,
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


		//Testimonial list owl carousel
		$(".testimonial-list").owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			nav: false,
			navSpeed:1200,
			dots: true,
			autoplay: false,
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
        


    });




    jQuery(window).load(function(){

        
    });


});	
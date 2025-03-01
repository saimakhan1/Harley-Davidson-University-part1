(function ($){
	'use strict';

	//Code starts

	//owl carousel JS
		//owl carousel team slider js
		$('.team-slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    responsive:{
	        0:{
	            items:3
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:3
	        }
	    }
	})

		//scroll
		$(window).scroll(function(){
		var dist= $(window).scrollTop();
			/*$('.abc').text(dist);*/
	
			if(dist>18){
					$('.header2').css({
						'position':'fixed',
						'top':'0',
						'left':'0',
						'z-index':'999',
						'background-color':'#white',
						'width':'100%'
				});
		}

		else{
			  $('.header2').css({
            'position': 'static', //'static' if you want it to be like normal flow
            'background-color': 'white' // Reset background if needed
        });
		};



	// show scroll top icon after crossing a distance
	if(dist>50){
		$('.to-top').fadeIn();
	}
	else{
		$('.to-top').fadeOut();
	}
	});


	//go to top after clicking top up
	$('.to-top').on('click',function(){
		$('html').animate({'scrollTop':0},1000);
	});	

	
}) (jQuery);
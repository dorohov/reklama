'use strict';
$(function() { 
	$('.slick-audio').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		appendArrows: '.content-block__cols.is--slick-btn .work-audio',
		infinite: false,
		draggable: false,
		swipe: false,
		touchMove: false,
		rows: 3,
		slidesPerRow: 3,
		responsive: [
		   /* {
				breakpoint: 1921,
				settings: {
				}
		    },*/
		    {
				breakpoint: 901,
				settings: {
					rows: 3,
					slidesPerRow: 2
				}
		    },
		    /*{
				breakpoint: 768,
				settings: {
					rows: 2,
					slidesPerRow: 2
				}
		    },*/
		    {
				//breakpoint: 480,
				breakpoint: 768,
				settings: {
					rows: 2,
					slidesPerRow: 1
				}
		    }
		],
		prevArrow: '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next"></use></svg></button>'
		//asNavFor: "#sl-nav",
		//fade: true,
		//customPaging: 20,
		//draggable: false,
		//swipe: false,
		//fade: true,
		//variableWidth: true,
		//centerMode: true,
	});
	$('.tabs-video').on('shown.bs.tab', function (e) {
	//$(".tabs-video").click(function(){
		//if(!$('.slick-video').hasClass('slick-initialized')) {
			//setTimeout(function() {
				$('.slick-video').slick({
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: false,
					draggable: false,
					swipe: false,
					touchMove: false,
					//asNavFor: "#sl-nav",
					//fade: true,
					arrows: true,
					appendArrows: '.content-block__cols.is--slick-btn .work-video',
					//rows: 3,
					//slidesPerRow: 3,
					//customPaging: 20,
					//draggable: false,
					//swipe: false,
					//fade: true,
					//variableWidth: true,
					//centerMode: true,
					prevArrow: '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev"></use></svg></button>',
					nextArrow: '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next"></use></svg></button>',
					responsive: [
					    {
							breakpoint: 901,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2,
							}
					    },
					    {
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2,
							}
					    },
					    {
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
					    }
					]
				});
       		//}, 0);
        //}
	});
	$('.slick-rating').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		appendArrows: '.content-block__cols.is--slick-btn .work-rating',
		infinite: false,
		vertical: true,
		draggable: false,
		swipe: false,
		touchMove: false,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    }
		],
		prevArrow: '<button type="button" class="slick-prev  is--vertical"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next  is--vertical"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next"></use></svg></button>'
		//asNavFor: "#sl-nav",
		//fade: true,
		//customPaging: 20,
		//draggable: false,
		//swipe: false,
		//fade: true,
		//variableWidth: true,
		//centerMode: true,
	});
	$('.slick-news').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		appendArrows: '.content-block__cols.is--slick-btn .work-news',
		infinite: false,
		responsive: [
		    {
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		],
		prevArrow: '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next"></use></svg></button>'
		//asNavFor: "#sl-nav",
		//fade: true,
		//customPaging: 20,
		//draggable: false,
		//swipe: false,
		//fade: true,
		//variableWidth: true,
		//centerMode: true,
	});
	$('.slick-artists').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		appendArrows: '.content-block__cols.is--slick-btn .work-artists',
		rows: 2,
		slidesPerRow: 4,
		infinite: false,
		responsive: [
		  	{
				breakpoint: 1200,
				settings: {
					rows: 2,
					slidesPerRow: 3
				}
		    },
		    {
				breakpoint: 1025,
				settings: {
					rows: 2,
					slidesPerRow: 5
				}
		    },
		    {
				breakpoint: 900,
				settings: {
					rows: 2,
					slidesPerRow: 4
				}
		    },
		    {
				breakpoint: 480,
				settings: {
					rows: 2,
					slidesPerRow: 2
				}
		    }
		],
		prevArrow: '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next"></use></svg></button>'
		//asNavFor: "#sl-nav",
		//fade: true,
		//customPaging: 20,
		//draggable: false,
		//swipe: false,
		//fade: true,
		//variableWidth: true,
		//centerMode: true,
	});
}); 
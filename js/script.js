$('.slider-zodiac').slick({
	mobileFirst: true,
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,

	 responsive: [{

      breakpoint: 767,
      settings: {
          infinite: false,
		  slidesToShow: 6,
		  slidesToScroll: 3,
		  dots: true
      }

    }, {

      breakpoint: 1120,
      settings: {
          infinite: false,
		  slidesToShow: 6,
		  slidesToScroll: 6,
		  dots: true      	
      }

     }]

});


$('.banner-slider').slick({
  infinite: false,
  dots: true
});


$('.shop-item-slider').slick({
	mobileFirst: true,
	infinite: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: true,

	 responsive: [{

      breakpoint: 767,
      settings: {
          infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  dots: true
      }

    }, {

      breakpoint: 1120,
      settings: {
          infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  dots: true      	
      }

     }]

});
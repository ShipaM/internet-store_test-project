$(function() {

	// Custom JS


	//$('.slick-slider').s
	var sandwich = function () {
		$(document).on('click', '.sandwich', function () {
			$(this).toggleClass('sandwich__active');
		});
	};


	var popularCategoriesSlider = function() {
		if($(window).width()  < 768) {
			$('.category-prev-js').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
			})
		} 
	};

	var productPrevSlider = function () {
		var sliderCount = $('.product-slider__count'),
		prodSlider = $('.product-slider__js');

		prodSlider.on('init afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			sliderCount.text('Страница ' + i +  ' из ' + slick.slideCount);
		});

		prodSlider.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			prevArrow: '.slider-nav_prev',
			nextArrow: '.slider-nav_next'
		})
	};

	popularCategoriesSlider()
	sandwich()
	productPrevSlider()




});

var popularCategoriesSlider = function () {
	var sliderElement = $('.category-prev-js');
	if($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))) {
		sliderElement.slick({
			slidesToShow: 2,
			slidesToScroll: 1,
		})
	} else if ($(window).width() > 768 && sliderElement.hasClass('slick-initialized')) {
		sliderElement.slick('unslick')
	}
};

$(window).on('resize', function() {
	popularCategoriesSlider();
});

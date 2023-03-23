import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
Swiper.use([Navigation, Pagination, EffectFade]);

let Slider = {};

Slider.initSlider = function (object, params = {}) {
	return new Swiper(object, {
		slidesPerView: 1,
		loop: false,
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		...params,
	});
};

export default Slider;

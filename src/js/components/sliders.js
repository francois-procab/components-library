import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
Swiper.use([Navigation, Pagination, EffectFade]);

let Slider = {};

Slider.initSwiper = (object, params = {}) => {
	return new Swiper(object, {
		slidesPerView: 1,
		loop: false,
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		...params,
	});
};

export default Slider;

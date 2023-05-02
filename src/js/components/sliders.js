import Swiper, { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
Swiper.use([Autoplay, Navigation, Pagination, EffectFade]);

let Slider = {};

Slider.initSwiper = (object, params = {}) => {
	return new Swiper(object, {
		slidesPerView: 1,
		loop: false,
		...params,
	});
};

export default Slider;

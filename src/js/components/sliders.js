import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

let Slider = {};

Slider.initSwiper = (object, params = {}) => {
	return new Swiper(object, {
		modules: [Navigation, Pagination, Autoplay],
		slidesPerView: 1,
		loop: false,
		...params,
	});
};

export default Slider;

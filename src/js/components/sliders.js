import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

let Slider = {};

Slider.initSwiper = (object, params = {}) => {
	return new Swiper(object, {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		loop: false,
		...params,
	});
};

export default Slider;

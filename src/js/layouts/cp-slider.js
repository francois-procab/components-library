import Slider from "../components/sliders.js";

document.addEventListener("DOMContentLoaded", (event) => {
	const sliders = document.querySelectorAll(".swiper");
	sliders.forEach((slider) => {
		Slider.initSwiper(slider, {
			spaceBetween: 20,
			breakpoints: {
				// when window width is >= 480px
				480: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	});
});

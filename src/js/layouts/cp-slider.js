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

	const sliderAutoFill = document.querySelector(".slider-auto-fill");
	let autoPlayDelay = 2500;

	let mySwiper = Slider.initSwiper(sliderAutoFill, {
		on: {
			init: (el) => {
				console.log(el);
				el.pagination.el.style.setProperty("--_delay", `${autoPlayDelay}ms`);
			},
		},
		slidesPerView: 1,
		spaceBetween: 20,
		watchSlidesProgress: true,
		autoplay: {
			delay: autoPlayDelay,
		},
		pagination: {
			el: ".swiper-progress-bar",
			clickable: true,
		},
	});

	mySwiper.on("init", (el) => {
		console.log(el);
	});
});

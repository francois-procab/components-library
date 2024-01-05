import Slider from "../components/sliders.js";

document.addEventListener("DOMContentLoaded", (event) => {
	const sliders = document.querySelectorAll(".swiper");
	sliders.forEach((slider) => {
		Slider.initSwiper(slider, {
			spaceBetween: 20,
			pagination: {
				el: slider.querySelector(".swiper-pagination"),
				dynamicBullets: true,
				dynamicMainBullets: 1,
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: slider.querySelector(".swiper-button--next"),
				prevEl: slider.querySelector(".swiper-button--prev"),
			},
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
	let autoPlayDelay = 5000;

	Slider.initSwiper(sliderAutoFill, {
		on: {
			init: (el) => {
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

	const infiniteSlider = document.querySelector(".slider-infinite");
	Slider.initSwiper(infiniteSlider, {
		spaceBetween: 40,
		grabCursor: false,
		loop: true,
		slidesPerView: "auto",
		autoplay: {
			enabled: true,
			delay: 0,
			pauseOnMouseEnter: true,
			disableOnInteraction: false,
		},
		centerInsufficientSlides: true,
		speed: 2000,
	});
});

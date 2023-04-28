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
		slidesPerView: 1,
		spaceBetween: 20,
		autoplay: {
			delay: autoPlayDelay,
		},
	});

	let slideCounts = mySwiper.params.loop ? mySwiper.slides.length - 2 : mySwiper.slides.length;
	let widthParts = 100 / slideCounts;
	console.log(widthParts);

	for (let i = 0; i < slideCounts; i++) {
		var div = document.createElement("div");
		document.querySelector(".progress-sections").appendChild(div);
	}

	function initProgressBar() {
		let calcProgress = (slideCounts - 1) * (autoPlayDelay + mySwiper.params.speed);
		calcProgress += autoPlayDelay;
		console.log(calcProgress);
	}

	initProgressBar();

	mySwiper.on("slideChange", function () {
		let progress = document.querySelector(".progress");

		if ((this.progress == -0 || (this.progress == 1 && this.params.loop)) && !progress.parent().is(".stopped")) {
			progress.style.width = 0;
		}

		if (progress.parentNode.classList.contains(".stopped")) {
			progress.style.setProperty("--_w:", Math.round(widthParts * (this.activeIndex + 1)) + "%");
		}
	});
});

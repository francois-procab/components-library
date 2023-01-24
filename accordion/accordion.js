const slideUp = (target, duration = 500) => {
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + "ms";
	target.style.boxSizing = "border-box";
	target.style.height = target.offsetHeight + "px";
	target.offsetHeight;
	target.style.overflow = "hidden";
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = "none";
		target.style.removeProperty("height");
		target.style.removeProperty("padding-top");
		target.style.removeProperty("padding-bottom");
		target.style.removeProperty("margin-top");
		target.style.removeProperty("margin-bottom");
		target.style.removeProperty("overflow");
		target.style.removeProperty("transition-duration");
		target.style.removeProperty("transition-property");
		//alert("!");
	}, duration);
};

const slideDown = (target, duration = 500) => {
	target.style.removeProperty("display");
	let display = window.getComputedStyle(target).display;

	if (display === "none") display = "block";

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = "hidden";
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = "border-box";
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + "ms";
	target.style.height = height + "px";
	target.style.removeProperty("padding-top");
	target.style.removeProperty("padding-bottom");
	target.style.removeProperty("margin-top");
	target.style.removeProperty("margin-bottom");
	window.setTimeout(() => {
		target.style.removeProperty("height");
		target.style.removeProperty("overflow");
		target.style.removeProperty("transition-duration");
		target.style.removeProperty("transition-property");
	}, duration);
};

const slideToggle = (target, duration = 500) => {
	if (window.getComputedStyle(target).display === "none") {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
};

const accordion = document.querySelector(".accordion");

if (typeof accordion !== "undefined" && accordion !== null) {
	const accordionPanels = accordion.querySelectorAll(".accordion__panel");
	const accordionTriggers = accordion.querySelectorAll(".accordion__btn");
	let speedAnimation = 300;

	accordionTriggers.forEach((trigger) => {
		trigger.addEventListener("click", (e) => {
			const panel = trigger.parentNode.parentNode.querySelector(".accordion__content");

			if (e.target.parentNode.parentNode.classList.contains("is-active")) {
				slideUp(panel, speedAnimation);

				panel.addEventListener(
					"transitionrun",
					() => {
						trigger.parentNode.parentNode.classList.remove("is-active");
					},
					{ once: true }
				);
			} else {
				accordionPanels.forEach(function (item) {
					if (item.classList.contains("is-active")) {
						slideUp(item.querySelector(".accordion__content"), speedAnimation);

						item.querySelector(".accordion__content").addEventListener(
							"transitionrun",
							() => {
								item.classList.remove("is-active");
							},
							{ once: true }
						);
					}
				});

				trigger.parentNode.parentNode.classList.add("is-active");
				slideDown(panel, speedAnimation);
			}
		});
	});
}

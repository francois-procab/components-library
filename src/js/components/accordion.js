import { slideUp, slideDown } from "../tools/utils.js";

export const Accordion = (() => {
	const togglePanel = (trigger) => {
		const accordion = document.querySelector(".accordion");
		let speedAnimation = 300;
		const accordionPanels = accordion.querySelectorAll(".accordion__panel");

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
	};
	const init = () => {
		const accordion = document.querySelector(".accordion");
		const accordionTriggers = accordion.querySelectorAll(".accordion__btn");

		accordionTriggers.forEach((trigger) => {
			togglePanel(trigger);
		});
	};
	return {
		init: init,
	};
})();

Accordion.init();

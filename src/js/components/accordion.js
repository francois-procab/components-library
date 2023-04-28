import { slideUp, slideDown } from "../tools/utils.js";

export const Accordion = (() => {
	const toggleAnimation = (trigger, content) => {
		content.addEventListener(
			"transitionrun",
			() => {
				trigger.classList.remove("is-active");
			},
			{ once: true }
		);
	};

	const togglePanel = (trigger) => {
		const accordion = trigger.parentNode.parentNode.parentNode;
		const accordionPanels = accordion.querySelectorAll(".accordion__panel");
		let speedAnimation = 300;

		accordionPanels.forEach((pan) => {
			if (pan.classList.contains("is-active")) {
				pan.querySelector(".accordion__content").style.boxSizing = "border-box";
				pan.querySelector(".accordion__content").style.display = "block";
			}
		});

		trigger.addEventListener("click", (e) => {
			const panel = trigger.parentNode.parentNode.querySelector(".accordion__content");

			if (e.target.parentNode.parentNode.classList.contains("is-active")) {
				if (slideUp != undefined && slideUp != null) {
					slideUp(panel, speedAnimation);
				} else {
					panel.style.display = "block";
				}
				toggleAnimation(trigger.parentNode.parentNode, panel);
			} else {
				accordionPanels.forEach((item) => {
					if (item.classList.contains("is-active")) {
						slideUp(item.querySelector(".accordion__content"), speedAnimation);
						toggleAnimation(item, item.querySelector(".accordion__content"));
					}
				});

				trigger.parentNode.parentNode.classList.add("is-active");
				slideDown(panel, speedAnimation);
			}
		});
	};

	const init = () => {
		const accordionTriggers = document.querySelectorAll(".accordion__btn");

		accordionTriggers.forEach((trigger) => {
			togglePanel(trigger);
		});
	};

	return {
		init: init,
	};
})();

Accordion.init();

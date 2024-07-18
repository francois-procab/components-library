export const Accordion = (() => {
	const togglePanel = (trigger) => {
		const accordion = trigger.closest(".accordion");
		const accordionPanels = accordion.querySelectorAll(".accordion__panel");
		const panel = trigger.closest(".accordion__panel");
		const content = panel.querySelector(".accordion__content");

		const closeAllPanels = () => {
			accordionPanels.forEach((item) => {
				item.classList.remove("is-active");
				item.querySelector(".accordion__btn").setAttribute("aria-expanded", false);
				item.querySelector(".accordion__content").setAttribute("aria-hidden", true);
			});
		};

		const openPanel = (panel) => {
			panel.classList.add("is-active");
			trigger.setAttribute("aria-expanded", true);
			content.setAttribute("aria-hidden", false);
		};

		trigger.addEventListener("click", (e) => {
			if (panel.classList.contains("is-active")) {
				panel.classList.remove("is-active");
				trigger.setAttribute("aria-expanded", false);
				content.setAttribute("aria-hidden", true);
			} else {
				closeAllPanels();
				openPanel(panel);
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
		init,
	};
})();

document.addEventListener("DOMContentLoaded", () => {
	Accordion.init();
});

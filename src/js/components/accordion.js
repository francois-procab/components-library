export const Accordion = (() => {
	const togglePanel = (trigger) => {
		const accordion = trigger.parentNode.parentNode.parentNode;
		const accordionPanels = accordion.querySelectorAll(".accordion__panel");

		trigger.addEventListener("click", (e) => {
			const targetParentAcc = e.target.parentNode.parentNode;
			const triggerParentNode = trigger.parentNode.parentNode;

			if (targetParentAcc.classList.contains("is-active")) {
				targetParentAcc.classList.remove("is-active");
				targetParentAcc.querySelector(".accordion__content").setAttribute("aria-hidden", true);
				trigger.setAttribute("aria-expanded", false);
			} else {
				accordionPanels.forEach((item) => {
					if (item.classList.contains("is-active")) {
						item.classList.remove("is-active");
						item.querySelector(".accordion__btn").setAttribute("aria-expanded", false);
						item.querySelector(".accordion__content").setAttribute("aria-hidden", true);
					}
				});

				triggerParentNode.classList.add("is-active");
				e.target.setAttribute("aria-expanded", true);
				triggerParentNode.querySelector(".accordion__content").setAttribute("aria-hidden", false);
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

// Tabs
import { fadeIn, fadeOut } from "../tools/utils.js";

export const Tabs = (() => {
	const triggerTab = (event) => {
		event.preventDefault();

		const trigger = event.target;
		const clickedTab = trigger.dataset.tabTarget;
		const tabContainer = trigger.closest(".tabs");
		const tabPanes = tabContainer.querySelectorAll(".tabs__pane");
		const tabButtons = tabContainer.querySelectorAll(".tabs__btn");

		// Remove attributes and class on siblings
		tabButtons.forEach((btn) => {
			btn.classList.remove("is-active");
			btn.setAttribute("aria-selected", false);
		});

		// Close all tab panes
		tabPanes.forEach((pane) => {
			fadeOut(pane);
		});

		// Set active class and attributes and show pane
		trigger.classList.add("is-active");
		trigger.setAttribute("aria-selected", true);
		fadeIn(document.getElementById(clickedTab));
	};

	const init = () => {
		const tabBtns = document.querySelectorAll(".tabs__btn");
		tabBtns.forEach((tab) => {
			tab.addEventListener("click", triggerTab);
		});
	};

	return {
		init,
	};
})();

Tabs.init();

// Tabs
import { fadeIn, fadeOut } from "../tools/utils.js";

export const Tabs = (() => {
	const triggerTab = (elt) => {
		elt.preventDefault();
		const trigger = elt.target;
		const clickedTab = trigger.dataset.tabTarget;
		const tabPanes = trigger.parentNode.parentNode.querySelectorAll(".tabs__pane");

		// Remove attributes and class on siblings
		for (let sibling of trigger.parentNode.children) {
			if (sibling !== elt) {
				sibling.classList.remove("is-active");
				sibling.setAttribute("aria-selected", false);
			}
		}

		// Close all tab panes
		[].forEach.call(tabPanes, (pane) => {
			fadeOut(pane);
		});

		// Set active class and attributes and show pane
		elt.target.classList.add("is-active");
		elt.target.setAttribute("aria-selected", true);
		fadeIn(document.querySelector(`#${clickedTab}`));
	};

	const init = () => {
		const $tabBtns = document.querySelectorAll(".tabs__btn");
		$tabBtns.forEach((tab) => {
			tab.addEventListener("click", triggerTab);
		});
	};

	return {
		init: init,
	};
})();

Tabs.init();

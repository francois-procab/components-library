import { Accordion } from "./components/accordion.js";
import { ActiveLink } from "./components/active-link.js";
import { Burger } from "./components/burger.js";
import { Form } from "./components/form.js";
import { LoadMore } from "./components/load-more.js";
import { Modal } from "./components/modal.js";
import { Tabs } from "./components/tabs.js";
import { Toast } from "./components/toast.js";

document.addEventListener("DOMContentLoaded", (e) => {
	Accordion;
	ActiveLink;
	Burger;
	Form;
	LoadMore;
	Modal;
	Tabs;
	Toast;

	// TO MOVE
	const hasSubNav = document.querySelectorAll(".has-sub-menu");
	hasSubNav.forEach((item) => {
		const trigger = item.querySelector(".menu-trigger");

		trigger.addEventListener("click", (e) => {
			e.preventDefault();

			hasSubNav.forEach((elt) => {
				elt.classList.remove("is-open");
			});

			if (item.classList.contains("is-open")) {
				item.classList.remove("is-open");
			} else {
				item.classList.add("is-open");
			}
		});
	});
});

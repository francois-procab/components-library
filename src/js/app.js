document.addEventListener("DOMContentLoaded", (e) => {
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

const buttonsBurger = document.querySelectorAll(".burger");
if (buttonsBurger.length) {
	buttonsBurger.forEach((button) => {
		button.addEventListener("click", (e) => {
			const currentState = button.getAttribute("data-state");
			const target = button.getAttribute("aria-controls");

			if (!currentState || currentState === "closed") {
				button.setAttribute("data-state", "opened");
				button.setAttribute("aria-expanded", "true");
				document.querySelector(`#${target}`).classList.add("is-open");
			} else {
				button.setAttribute("data-state", "closed");
				button.setAttribute("aria-expanded", "false");
				document.querySelector(`#${target}`).classList.remove("is-open");
			}
		});
	});
}

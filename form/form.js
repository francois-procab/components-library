// Show/Hide Password
const togglePassword = document.querySelector(".js-toggle-password");
const inputPassword = document.querySelector(".js-input-password");

const ShowHidePassword = (() => {
	// Check type of input
	const showHide = () => {
		if (inputPassword.type === "password") {
			inputPassword.setAttribute("type", "text");
			togglePassword.classList.add("password-is-visible");
		} else {
			inputPassword.setAttribute("type", "password");
			togglePassword.classList.remove("password-is-visible");
		}
	};

	const init = () => {
		togglePassword.addEventListener("click", showHide);
	};

	return {
		init: init,
	};
})();

ShowHidePassword.init();

const FloatLabel = (() => {
	const handleFocus = (e) => {
		const target = e.target;
		target.parentNode.classList.add("label-is-floating");
	};

	const handleBlur = (e) => {
		const target = e.target;
		if (!target.value) {
			target.parentNode.classList.remove("label-is-floating");
		}
	};

	const bindEvents = (element) => {
		const floatField = element.querySelector("input");
		floatField.addEventListener("focus", handleFocus);
		floatField.addEventListener("blur", handleBlur);
	};

	const init = () => {
		const floatContainers = document.querySelectorAll(".form__field");

		floatContainers.forEach((element) => {
			if (element.querySelector("input").value != null) {
				element.classList.add("label-is-floating");
			}

			bindEvents(element);
		});
	};

	return {
		init: init,
	};
})();

FloatLabel.init();

export const FloatLabel = (() => {
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
		const $floatContainers = document.querySelectorAll(".has-floating-label");

		$floatContainers.forEach((element) => {
			if (element.querySelector("input").value) {
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

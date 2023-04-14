export const Alert = (() => {
	const fadeOut = (target) => {
		let fadeTime = 300;
		target.style.opacity = 1;
		target.style.transform = "translateX(0)";
		target.style.transition = `all ${fadeTime}ms ease-in-out`;
		target.style.opacity = 0;
		target.style.transform = "translateX(10%)";
		setTimeout(() => {
			target.style.display = "none";
		}, fadeTime);
	};

	const init = () => {
		const $alerts = document.querySelectorAll(".alert");

		$alerts.forEach((alert) => {
			if (alert.classList.contains("alert--has-close")) {
				const $closeBtn = alert.querySelector("button");
				$closeBtn.addEventListener("click", (e) => {
					e.preventDefault();
					fadeOut(alert);
				});
			}
		});
	};
	return {
		init: init,
	};
})();

Alert.init();
